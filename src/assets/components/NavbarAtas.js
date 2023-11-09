import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const NavbarAtas = ({navigation, title}) => {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../images/icons/back.png')} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default NavbarAtas;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 30,
  },
  title: {
    marginLeft: 20,
    fontSize: 18,
  },
});
