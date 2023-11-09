import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import CardPage from '../assets/components/CardPage';
import {ScrollView} from 'react-native-gesture-handler';

const Kalkulasi = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.Container}>
        <View style={styles.img}>
          <Image
            source={require('../assets/images/calculator-notebook.jpg')}
            style={styles.image} // Tambahkan style prop untuk mengatur lebar dan tinggi gambar
          />
        </View>
        <View style={styles.cardContainer}>
          <CardPage
            text="Kalkulator"
            src={require('../assets/images/calculator.png')}
            onPress={() => navigation.navigate('Kalkulator')}
          />
          <CardPage
            text="BMI Kalkulator"
            src={require('../assets/images/bmi.png')}
            onPress={() => navigation.navigate('BMI')}
          />
          <CardPage
            text="Kalori Kalkulator"
            src={require('../assets/images/nutrition.png')}
            onPress={() => navigation.navigate('KebutuhanKalori')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Kalkulasi;

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
    rowGap: 30,
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
