import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import MyTextInput from '../assets/components/MyTextInput';
import HalfButton from '../assets/components/HalfButton';
import FullButton from '../assets/components/FullButton';
import SeparatorLine from '../assets/components/SeparatorLine';

const usersData = [
  {
    username: 'dicky',
    password: '123',
    nama: 'Dicky',
  },
  {
    username: 'waray',
    password: '123',
    nama: 'Seeun',
  },
  {
    username: 'user3',
    password: '123',
    nama: 'Haewon',
  },
  {
    username: 'user4',
    password: '123',
    nama: 'User Empat',
  },
  {
    username: 'user5',
    password: '123',
    nama: 'User Lima',
  },
];

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Mencari pengguna dengan username yang cocok
    const user = usersData.find(user => user.username === username);

    if (user && user.password === password) {
      // Jika username dan password cocok, navigasi ke halaman Dashboard dengan username
      navigation.navigate('Dashboard', {nama: user.username}); // Mengirimkan parameter nama (username) ke halaman Dashboard
    } else {
      // Jika username atau password salah, tampilkan pesan kesalahan
      Alert.alert('Login Failed', 'Username or password is incorrect.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Image
          source={require('../assets/images/dicky-logo.png')}
          style={styles.logo}
        />
        <Text>Let's Get You Login 👋</Text>
      </View>

      <View style={styles.textInputContainer}>
        <MyTextInput
          placeholder="Username"
          placeholderTextColor="#A9A9A9"
          value={username}
          onChangeText={setUsername}
        />
        <MyTextInput
          placeholder="Password"
          placeholderTextColor="#A9A9A9"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <Text>Forgot Password?</Text>

      <View style={styles.ButtonConfirmContainer}>
        <FullButton buttonText="Login" onPress={handleLogin} />
      </View>

      <SeparatorLine />
      <View style={styles.halfButtonContainer}>
        <HalfButton imageSource="google" buttonText="Google" />
        <HalfButton imageSource="facebook" buttonText="Facebook" />
      </View>

      <View style={styles.textBottomContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textLink}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

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
