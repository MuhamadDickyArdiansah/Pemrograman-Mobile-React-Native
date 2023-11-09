import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React from 'react';

const ButtonProf = ({img1, buttonText, img2, onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View style={{flexDirection: 'row'}}>
        <Image source={img1} style={{marginRight: 20}} />
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>

      <Image source={img2} />
    </TouchableOpacity>
  );
};

export default ButtonProf;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%', // Ukuran setengah
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#EAEDEF',
    color: 'white',
    marginBottom: 10,
  },
  buttonText: {
    color: 'black',
  },
});
