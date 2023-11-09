import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import MyTextInput from '../assets/components/MyTextInput';
import HalfButton from '../assets/components/HalfButton';
import FullButton from '../assets/components/FullButton';
import SeparatorLine from '../assets/components/SeparatorLine';

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Image
          source={require('../assets/images/dicky-logo.png')}
          style={styles.logo}
        />
        <Text>Register Account 👋</Text>
      </View>

      <View style={styles.textInputContainer}>
        <MyTextInput placeholder="nama" placeholderTextColor="#A9A9A9" />
        <MyTextInput placeholder="username" placeholderTextColor="#A9A9A9" />
        <MyTextInput placeholder="Email" placeholderTextColor="#A9A9A9" />
        <MyTextInput
          placeholder="Password"
          placeholderTextColor="#A9A9A9"
          secureTextEntry={true}
        />
      </View>

      <Text>Forgot Password?</Text>

      <View style={styles.ButtonConfirmContainer}>
        <FullButton
          buttonText="Register"
          onPress={() => navigation.navigate('Login')}
        />
      </View>

      <SeparatorLine />
      <View style={styles.halfButtonContainer}>
        <HalfButton imageSource="google" buttonText="Google" />
        <HalfButton imageSource="facebook" buttonText="Facebook" />
      </View>

      <View style={styles.textBottomContainer}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  logo: {
    resizeMode: 'contain',
    width: 150,
    height: 50,
    marginBottom: 30,
  },
  title: {
    marginBottom: 30,
  },
  ButtonConfirmContainer: {
    marginTop: 30,
  },
  halfButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  textBottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50,
  },
});
