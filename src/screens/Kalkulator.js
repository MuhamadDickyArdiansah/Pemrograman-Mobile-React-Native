import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import MyTextInput from '../assets/components/MyTextInput';
import SmallButton from '../assets/components/SmallButton';
import FullButton from '../assets/components/FullButton';
import MidButton from '../assets/components/MidButton';

const Kalkulator = ({navigation}) => {
  const [angka1, setAngka1] = useState('');
  const [angka2, setAngka2] = useState('');
  const [operator, setOperator] = useState('');
  const [hasil, setHasil] = useState('');

  const handleOperator = selectedOperator => {
    setOperator(selectedOperator);
  };

  const handleClear = () => {
    setAngka1('');
    setAngka2('');
    setOperator('');
    setHasil('');
  };

  const handleHitung = () => {
    const num1 = parseFloat(angka1);
    const num2 = parseFloat(angka2);

    if (operator === '+') {
      setHasil((num1 + num2).toString());
    } else if (operator === '-') {
      setHasil((num1 - num2).toString());
    } else if (operator === 'x') {
      setHasil((num1 * num2).toString());
    } else if (operator === '/') {
      if (num2 !== 0) {
        setHasil((num1 / num2).toString());
      } else {
        setHasil('Error');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <MyTextInput
          placeholder="masukkan angka ke 1"
          keyboardType="numeric"
          value={angka1}
          onChangeText={text => setAngka1(text)}
        />
        <MyTextInput
          placeholder="masukkan angka ke 2"
          keyboardType="numeric"
          value={angka2}
          onChangeText={text => setAngka2(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <SmallButton
          buttonText="+"
          style={styles.smallButton}
          onPress={() => handleOperator('+')}
        />
        <SmallButton
          buttonText="-"
          style={styles.smallButton}
          onPress={() => handleOperator('-')}
        />
        <SmallButton
          buttonText="x"
          style={styles.smallButton}
          onPress={() => handleOperator('x')}
        />
        <SmallButton
          buttonText="/"
          style={styles.smallButton}
          onPress={() => handleOperator('/')}
        />
      </View>
      <View style={styles.button}>
        <MidButton buttonText="Hitung" onPress={handleHitung} />
        <MidButton buttonText="Clear" onPress={handleClear} />
      </View>

      <View>
        <MyTextInput placeholder="Hasil" editable={false} value={hasil} />
      </View>
    </View>
  );
};

export default Kalkulator;

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },

  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 30,
  },
  smallButton: {
    flex: 0.5,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
});
