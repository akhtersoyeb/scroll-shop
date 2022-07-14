import { useRef, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

import { supabase } from "../../libs/supabase";
import PhoneInput from "react-native-phone-number-input";
import { Button, Input } from "react-native-elements";

import { styles } from "./styles";

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [waiting, setWaiting] = useState(false);

  const phoneInput = useRef(null);

  const getPhoneNumber = () => {
    Alert.alert(phoneNumber);
  };

  const signInWithPhone = async () => {
    if (otp) {
      verifyOTP();
    } else {
      getOTP();
    }
  };

  const getOTP = async () => {
    setWaiting(true);
    let { user, error } = await supabase.auth.signIn({
      phone: phoneNumber,
    });
    if (error) Alert.alert(error.message);
  };

  const verifyOTP = async () => {
    let { session, error } = await supabase.auth.verifyOTP({
      phone: phoneNumber,
      token: otp,
    });
    if (error) Alert.alert(error.message);
  };

  // async function signInWithPhone() {
  //   setLoading(true)
  //   const { user, error } = await supabase.auth.signIn({
  //     phone: phone,
  //   })

  //   if (error) Alert.alert(error.message)
  //   setLoading(false)
  // }

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

      <TouchableOpacity style={styles.button} onPress={() => signInWithPhone()}>
        <Text style={styles.buttonText}>{waiting ? "Verify" : "Get"} OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
