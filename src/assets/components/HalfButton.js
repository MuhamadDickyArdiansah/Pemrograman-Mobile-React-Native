import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const HalfButton = ({imageSource, buttonText}) => {
  // Tentukan sumber gambar berdasarkan prop imageSource
  let source;
  if (imageSource === 'google') {
    source = require('../images/google.png');
  } else if (imageSource === 'facebook') {
    source = require('../images/facebook.png');
  }

  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Image source={source} />
      <Text>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default HalfButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '48%', // Ukuran setengah
    padding: 10, // Ruang di sekitar tombol
    borderWidth: 1,
    borderColor: '#A9A9A9',
    borderRadius: 10,
  },
});
