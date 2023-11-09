import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const MidButton = ({buttonText, onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default MidButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '40%', // Ukuran setengah
    padding: 10, // Ruang di sekitar tombol
    borderWidth: 1,
    borderColor: '#A9A9A9',
    borderRadius: 10,
    backgroundColor: '#07A0B0',
    color: 'white',
  },
  buttonText: {
    color: 'white',
  },
});
