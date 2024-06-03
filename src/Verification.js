import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

export default function Verification() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const navigation = useNavigation();
  const inputRefs = useRef([]);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    
    if (text && index < 3) {
      inputRefs.current[index + 1].focus();
    } else if (!text && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    // Assuming OTP verification is successful, navigate to the Landing screen
    navigation.navigate('Landing');
  };

  const handleResendOtp = () => {
    // handle resend OTP
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={{
                uri: 'https://img.icons8.com/ios-glyphs/30/000000/back.png',
              }}
              style={styles.backIcon}
            />
          </TouchableOpacity>

          <View style={styles.header}>
            <Image
              alt="App Logo"
              resizeMode="contain"
              style={styles.headerImg}
              source={{
                uri: 'https://play-lh.googleusercontent.com/WxbIQFzR06HL_nSTZdJnp5L5qVCqonweNhHW4tlpRsRnksIX_BqkP9ov_Th_SNOoz5M',
              }}
            />

            <Text style={styles.title}>
              Verification
            </Text>

            <Text style={styles.subtitle}>
              You will get an OTP via SMS
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.otpContainer}>
              {otp.map((value, index) => (
                <TextInput
                  key={index}
                  style={styles.otpInput}
                  maxLength={1}
                  keyboardType="number-pad"
                  onChangeText={(text) => handleOtpChange(text, index)}
                  value={value}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                />
              ))}
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={handleVerify}
                disabled={otp.some((digit) => digit === '')}
              >
                <View style={styles.btn}>
                  <Text style={styles.btnText}>VERIFY</Text>
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={handleResendOtp}>
              <Text style={styles.resendText}>
                Didn't receive the OTP? <Text style={styles.resendLink}>Resend again</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  /** Header */
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
  },
  /** Form */
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  otpInput: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    textAlign: 'center',
    borderRadius: 12,
    fontSize: 20,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },
  formAction: {
    marginTop: 16,
    marginBottom: 16,
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  resendText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    marginTop: 16,
  },
  resendLink: {
    color: '#075eec',
  },
});
