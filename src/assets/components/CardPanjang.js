import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const CardPanjang = ({src, text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={src} style={styles.image} />
      </View>
      <Text style={styles.text}>{text}</Text>
      <Image source={require('../images/right-arrow1.png')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 130,
    padding: 20,
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    backgroundColor: 'rgba(7, 160, 176, 0.3)',
    opacity: 10,
    borderRadius: 10,
    alignItems: 'center',
    padding: 20,
    width: 120,
  },
  image: {
    width: 54,
    height: 54,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    bottom: 5,
  },
});

export default CardPanjang;
