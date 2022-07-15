import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  heading: {
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: 20,
    color: 'black'
  },

  phoneNumberView: {
    width: '80%',
    height: 50,
    backgroundColor: 'white'
  },
  otpInputView: {
    width: '80%',
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    marginTop: 10
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    width: '80%',
    padding: 8,
    backgroundColor: '#00B8D4',
  },

  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  }
})