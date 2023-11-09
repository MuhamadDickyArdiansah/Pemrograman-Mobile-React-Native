import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import FullButton from '../assets/components/FullButton';

const Splash = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/dicky-logo.png')}
        style={styles.logo}
      />
      <FullButton
        buttonText="Get Started"
        onPress={() => {
          navigation.navigate('Auth');
        }}
        style={styles.button}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  logo: {
    resizeMode: 'contain',
    width: 300,
    height: 200,
    flex: 1,
  },
  button: {
    flex: 1,
  },
});
