import React, { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { supabase } from "../services/supabaseClient";
import { getUserProfile } from "../queries/users";
import type { UserProfile } from "../queries/users";
import { useSupabaseMutation } from "../hooks/useSupabase";

interface AuthContextProps {
  currentUser: UserProfile | null;
  loading: boolean;
  requestOTPWithPhoneNumber: (
    phone: string,
  ) => Promise<void>;
  verifyOTPWithPhoneNumber: (phone: string, token: string) => Promise<void>;
  updateCurrentUser: (
    fields: Partial<Omit<UserProfile, "id" | "email">>,
  ) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const { execute, error } = useSupabaseMutation();

  useEffect(() => {
    (async () => {
      setUserInitialState();
    })();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, currentSession) => {
        if (currentSession && currentSession.user) {
          const user = await getUserProfile(currentSession.user.id);
          setCurrentUser(user);
        } else {
          setCurrentUser(null);
        }
        setLoading(false);
      },
    );
    return () => {
      authListener!.unsubscribe();
    };
  }, []);

  const setUserInitialState = async () => {
    const user = supabase.auth.user();
    if (supabase.auth.session() && user !== null) {
      const profile = await getUserProfile(user.id);
      setCurrentUser(profile);
    } else {
      setCurrentUser(null);
    }
    setLoading(false);
  };

  const updateCurrentUser = async (
    fields: Partial<Omit<UserProfile, "id" | "email">>,
  ) => {
    setCurrentUser(
      (prevUser) => (prevUser ? { ...prevUser, ...fields } : null),
    );
  };

  const requestOTPWithPhoneNumber = async (
    phone: string,
  ) => {
    await supabase.auth.signIn({
      phone,
    });
  };

  const verifyOTPWithPhoneNumber = async (
    phone: string,
    token: string,
  ) => {
    await supabase.auth.verifyOTP({
      phone,
      token,
    });
  };

  const logout = async () => {
    setLoading(true);
    execute(supabase.auth.signOut());
  };

  if (error) {
    Alert.alert(error.message);
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loading,
        requestOTPWithPhoneNumber,
        verifyOTPWithPhoneNumber,
        updateCurrentUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export const useCurrentUser = (): UserProfile => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    throw new Error("useCurrentUser must be used in an authenticated screen");
  }

  return currentUser;
};
