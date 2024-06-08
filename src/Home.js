import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import PhoneInput from 'react-native-phone-input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const [phone, setPhone] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <KeyboardAwareScrollView>
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
              Sign in to the <Text style={{ color: '#075eec' }}>App</Text>
            </Text>

            <Text style={styles.subtitle}>
              57th IFGF DELHI FAIR
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Phone number</Text>
              <PhoneInput
                initialCountry="in"
                textProps={{
                  placeholder: "Enter your mobile number",
                }}
                onChangePhoneNumber={(number) => setPhone(number)}
                style={styles.phoneInput}
              />
            </View>

            <Text style={styles.otpInfo}>
              We will send you one time password (OTP)
            </Text>

            <View style={styles.checkboxContainer}>
              <CheckBox
                checked={isChecked}
                onPress={() => setIsChecked(!isChecked)}
                containerStyle={styles.checkbox}
              />
              <Text style={styles.checkboxText}>
                Yes, I agree to the{' '}
                <Text style={styles.link}>Terms and Conditions</Text> and{' '}
                <Text style={styles.link}>Privacy Policy</Text>.
              </Text>
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Verification');
                }}
                disabled={!isChecked}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Send OTP</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Landing');
          }}
          style={{ marginTop: 'auto' }}>
          <Text style={styles.formFooter}>
            <Text style={{ textDecorationLine: 'underline' }}>Continue as Guest</Text>
          </Text>
        </TouchableOpacity>
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
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  phoneInput: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },
  otpInfo: {
    fontSize: 16,
    color: '#222',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: 24,
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    marginRight: 10,
  },
  checkboxText: {
    flex: 1,
    fontSize: 14,
    color: '#222',
  },
  link: {
    color: '#075eec',
    textDecorationLine: 'underline',
  },
  formAction: {
    marginTop: 4,
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
});
