import { useRef, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

import PhoneInput from "react-native-phone-number-input";

import { useAuth } from "../../contexts/AuthProvider";
import { styles } from "./styles";
import { supabase } from "../../services/supabaseClient";

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [waiting, setWaiting] = useState(false);
  const phoneInput = useRef(null);

  const { requestOTPWithPhoneNumber, verifyOTPWithPhoneNumber } = useAuth();

  const handleSubmit = async () => {
    if (phoneNumber && otp) {
      try {
        let { session, error } = await supabase.auth.verifyOTP({
          phone: phoneNumber,
          token: otp,
        });
        if (error) console.log(error);
      } catch (e) {
        console.warn(e);
      }
    } else if (phoneNumber && !otp) {
      setWaiting(true);
      try {
        let { user, error } = await supabase.auth.signIn({
          phone: phoneNumber,
        });
        if (error) console.log(error);
      } catch (e) {
        console.warn(e);
      }
    } else {
      Alert.alert("Invalid input. Enter them correctly");
    }
  };

  return (
    <View style={styles.MainContainer}>
      <Text style={styles.heading}>
        Welcome to Scroll Shop
      </Text>

      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="IN"
        layout="first"
        withShadow
        autoFocus
        containerStyle={styles.phoneNumberView}
        textContainerStyle={{ paddingVertical: 0 }}
        onChangeFormattedText={(input) => {
          setPhoneNumber(input);
        }}
      />

      {waiting && (
        <TextInput
          value={otp}
          style={styles.otpInputView}
          onChangeText={(input) => {
            setOtp(input);
          }}
          keyboardType="numeric"
        />
      )}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>{waiting ? "Verify" : "Get"} OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
