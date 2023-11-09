import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import FullButton from '../assets/components/FullButton';

const KonversiMataUang = () => {
  const [selectedCurrencyJumlah, setSelectedCurrencyJumlah] = useState('USD');
  const [selectedCurrencyDikonversikan, setSelectedCurrencyDikonversikan] =
    useState('IDR');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(null);

  const convertCurrency = () => {
    const conversionRates = {
      USD: 1,
      IDR: 1 / 15850,
      EUR: 1 / 0.9418,
    };

    const convertedAmount =
      (parseFloat(amount) * conversionRates[selectedCurrencyJumlah]) /
      conversionRates[selectedCurrencyDikonversikan];

    const conresult = Number.isInteger(convertedAmount)
      ? convertedAmount.toFixed(0)
      : convertedAmount.toFixed(6);

    setResult(conresult.replace(/\.?0*$/, ''));
  };

  const handleSwap = () => {
    const temp = selectedCurrencyJumlah;
    setSelectedCurrencyJumlah(selectedCurrencyDikonversikan);
    setSelectedCurrencyDikonversikan(temp);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.formGroup}>
          <Text>Jumlah</Text>
          <View style={styles.input}>
            <TextInput
              style={styles.teksInput}
              keyboardType="numeric"
              value={amount}
              onChangeText={text => setAmount(text)}
            />
            <Picker
              style={styles.select}
              selectedValue={selectedCurrencyJumlah}
              onValueChange={itemValue => {
                setSelectedCurrencyJumlah(itemValue);
              }}>
              <Picker.Item label="USD" value="USD" />
              <Picker.Item label="IDR" value="IDR" />
              <Picker.Item label="EUR" value="EUR" />
            </Picker>
          </View>
        </View>
        <TouchableOpacity style={styles.swap} onPress={handleSwap}>
          <Image source={require('../assets/images/swap.png')} />
        </TouchableOpacity>
        <View style={styles.formGroup}>
          <Text>Dikonversikan menjadi</Text>
          <View style={styles.input}>
            <TextInput
              style={styles.teksInput}
              value={result === null ? '' : result.toString()}
              editable={false}
            />
            <Picker
              style={styles.select}
              selectedValue={selectedCurrencyDikonversikan}
              onValueChange={itemValue => {
                setSelectedCurrencyDikonversikan(itemValue);
              }}>
              <Picker.Item label="USD" value="USD" />
              <Picker.Item label="IDR" value="IDR" />
              <Picker.Item label="EUR" value="EUR" />
            </Picker>
          </View>
        </View>
        <FullButton buttonText="Konversi" onPress={convertCurrency} />
        <Text style={styles.teksHasil}>
          {amount} {selectedCurrencyJumlah} = {result === null ? '' : result}{' '}
          {selectedCurrencyDikonversikan}
        </Text>
      </View>
    </View>
  );
};

export default KonversiMataUang;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  swap: {
    alignItems: 'center',
    margin: 10,
  },
  formGroup: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  select: {
    width: '40%',
  },
  teksInput: {
    flex: 1,
  },
  teksHasil: {
    marginTop: 30,
  },
});
