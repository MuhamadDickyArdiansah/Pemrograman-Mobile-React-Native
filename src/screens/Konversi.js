import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import CardPage from '../assets/components/CardPage';
import {ScrollView} from 'react-native-gesture-handler';

const Konversi = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.Container}>
        <View style={styles.img}>
          <Image
            source={require('../assets/images/back-school.jpg')}
            style={styles.image} // Tambahkan style prop untuk mengatur lebar dan tinggi gambar
          />
        </View>

        <View style={styles.cardContainer}>
          <CardPage
            text="Konversi Mata Uang"
            src={require('../assets/images/change.png')}
            onPress={() => navigation.navigate('KonversiMataUang')}
          />
          <CardPage
            text="Konversi Suhu"
            src={require('../assets/images/bmi.png')}
            onPress={() => navigation.navigate('KonversiSuhu')}
          />
          <CardPage
            text=" Nilai"
            src={require('../assets/images/nutrition.png')}
            onPress={() => navigation.navigate('Nilai')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Konversi;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    rowGap: 20,
    flexWrap: 'wrap',
  },
  img: {
    width: 350,
    height: 200,
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
});
