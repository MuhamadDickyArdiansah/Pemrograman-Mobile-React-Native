import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const CardPage = ({src, text, onPress}) => {
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
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'white',
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
  },
});

export default CardPage;
