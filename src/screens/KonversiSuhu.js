import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Slider from '@react-native-community/slider';

const KonversiSuhu = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = value => {
    setSliderValue(value);
  };

  const celsiusToFahrenheit = celsius => {
    return (celsius * 9) / 5 + 32;
  };

  const celsiusToKelvin = celsius => {
    return celsius + 273.15;
  };

  const fahrenheit = celsiusToFahrenheit(sliderValue);
  const kelvin = celsiusToKelvin(sliderValue);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>Celsius: {sliderValue}</Text>
        <Text>Fahrenheit: {fahrenheit.toFixed(2)}</Text>
        <Text>Kelvin: {kelvin.toFixed(2)}</Text>
        <Slider
          style={styles.slider}
          minimumValue={-20}
          maximumValue={100}
          step={1}
          value={sliderValue}
          onValueChange={handleSliderChange}
        />
      </View>
    </View>
  );
};

export default KonversiSuhu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: 20,
    borderRadius: 10, // Atur radius sesuai preferensi Anda
    shadowColor: 'black', // Warna bayangan
    shadowOffset: {width: 0, height: 2}, // Offset bayangan
    shadowOpacity: 0.2, // Opasitas bayangan
    shadowRadius: 3, // Jari-jari bayangan
    elevation: 5, // Elevation di Android
    backgroundColor: 'white', // Warna latar belakang
  },
  slider: {
    width: 200,
    marginTop: 20, // Jarak antara Card dan Slider
  },
});
