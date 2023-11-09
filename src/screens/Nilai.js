import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MyTextInput from '../assets/components/MyTextInput';
import MidButton from '../assets/components/MidButton';

const Nilai = () => {
  const [tugas1, setTugas1] = useState(0);
  const [tugas2, setTugas2] = useState(0);
  const [uts, setUTS] = useState(0);
  const [uas, setUAS] = useState(0);
  const [nilaiAkhir, setNilaiAkhir] = useState(0);
  const [indeksNilai, setIndeksNilai] = useState('');

  const hitungNilaiAkhir = () => {
    // Hitung nilai akhir dengan bobot tertentu (misalnya 30% tugas, 30% UTS, 40% UAS)
    const nilaiAkhir = tugas1 * 0.15 + tugas2 * 0.15 + uts * 0.3 + uas * 0.4;

    // Set nilai akhir
    setNilaiAkhir(nilaiAkhir);

    // Tentukan indeks nilai berdasarkan rentang tertentu
    if (nilaiAkhir >= 80) {
      setIndeksNilai('A');
    } else if (nilaiAkhir >= 70) {
      setIndeksNilai('B');
    } else if (nilaiAkhir >= 60) {
      setIndeksNilai('C');
    } else if (nilaiAkhir >= 50) {
      setIndeksNilai('D');
    } else {
      setIndeksNilai('E');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Nilai</Text>
      <View style={styles.inputContainer}>
        <Text>Tugas 1</Text>
        <MyTextInput
          onChangeText={text => setTugas1(parseFloat(text))}
          keyboardType="numeric"
        />

        <Text>Tugas 2</Text>
        <MyTextInput
          onChangeText={text => setTugas2(parseFloat(text))}
          keyboardType="numeric"
        />

        <Text>UTS</Text>
        <MyTextInput
          onChangeText={text => setUTS(parseFloat(text))}
          keyboardType="numeric"
        />

        <Text>UAS</Text>
        <MyTextInput
          onChangeText={text => setUAS(parseFloat(text))}
          keyboardType="numeric"
        />

        <MidButton buttonText="Hitung Nilai Akhir" onPress={hitungNilaiAkhir} />
      </View>
      <View>
        <Text>Nilai Akhir: {nilaiAkhir}</Text>
        <Text>Indeks Nilai: {indeksNilai}</Text>
      </View>
    </View>
  );
};

export default Nilai;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputContainer: {
    marginTop: 30,
  },
});
