import {StyleSheet, Text, View, ScrollView, Image, Alert} from 'react-native';
import React from 'react';
import ButtonProf from '../assets/components/ButtonProf';

const Profile = ({navigation}) => {
  const handleLogout = () => {
    Alert.alert(
      'Konfirmasi Logout',
      'Apakah Anda yakin ingin keluar?',
      [
        {
          text: 'Batal',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            // Jika pengguna menekan OK, arahkan ke halaman login
            navigation.navigate('Login');
            // Anda juga dapat menampilkan popup "Berhasil keluar" di sini jika diperlukan
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image
            style={styles.gambar}
            source={require('../assets/images/profile.jpg')}
            resizeMode="contain"
          />
          <Text>Muhamad Dicky Ardiansah</Text>
          <Text>dicky69@gmail.com</Text>
        </View>
        <View style={styles.setting}>
          <Text style={styles.judul}>Setting</Text>
          <ButtonProf
            img1={require('../assets/images/icons/credit-card.png')}
            buttonText="Payment Method"
            img2={require('../assets/images/skip-track.png')}
          />
          <ButtonProf
            img1={require('../assets/images/icons/internet.png')}
            buttonText="Language"
            img2={require('../assets/images/skip-track.png')}
          />
          <ButtonProf
            img1={require('../assets/images/icons/secure.png')}
            buttonText="Security"
            img2={require('../assets/images/skip-track.png')}
          />
        </View>
        <View style={styles.support}>
          <Text style={styles.judul}>Support</Text>
          <ButtonProf
            img1={require('../assets/images/icons/help.png')}
            buttonText="About Developer"
            img2={require('../assets/images/skip-track.png')}
            onPress={() => navigation.navigate('About')}
          />
          <ButtonProf
            img1={require('../assets/images/icons/logout.png')}
            buttonText="Logout"
            img2={require('../assets/images/skip-track.png')}
            onPress={handleLogout}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  content: {
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: 'white',
    elevation: 3,
  },
  header: {
    flex: 1,
    alignItems: 'center',
  },
  gambar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  setting: {
    justifyContent: 'space-between',
  },
  judul: {
    fontSize: 18,
    marginBottom: 20,
  },
});
