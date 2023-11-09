import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const CardKotak = ({src, text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={src} style={styles.image} />
      </View>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 200,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 40,
    backgroundColor: 'white',
  },
  imageContainer: {
    backgroundColor: 'rgba(7, 160, 176, 0.3)',
    opacity: 10,
    borderRadius: 30,
    alignItems: 'center',
    width: 150,
    height: 130,
  },
  image: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
    borderRadius: 30,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default CardKotak;
