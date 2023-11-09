import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';

const About = () => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/per.jpg')}
        resizeMode="contain"
        style={styles.imageBackground}
      />
      <View style={styles.container}>
        <View style={styles.About}>
          <Image
            source={require('../assets/images/profile.jpg')}
            resizeMode="contain"
            style={styles.imageAbout}
          />
          <Text style={styles.textName}>Muhamad Dicky Ardiansah</Text>
          <View style={styles.address}>
            <Image source={require('../assets/images/maps.png')} />
            <Text> Ciamis, Jawa Barat, Indonesia</Text>
          </View>
          <View style={styles.line}></View>
          <Text style={styles.textAbout}>
            Seorang mahasiswa di ITENAS (Institut Teknologi Nasional) dengan
            jurusan Informatika. Saat ini, saya sedang menjalani tugas
            pemrograman mobile dan mengejar minat saya dalam pengembangan
            aplikasi. Selain itu, saya selalu bersemangat untuk belajar hal-hal
            baru di dunia teknologi dan berharap dapat memberikan kontribusi
            positif melalui proyek-proyek saya.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: 235,
    bottom: 40,
  },
  container: {
    padding: 20,
    bottom: 60,
  },
  imageAbout: {
    width: 75,
    height: 75,
    borderRadius: 50,
    bottom: 40,
    shadowColor: 'black',
  },
  textName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  address: {
    flexDirection: 'row',
  },
  textAbout: {
    textAlign: 'justify',
  },
  line: {
    width: 50,
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 10,
  },
  contact: {
    marginVertical: 30,
  },
});
