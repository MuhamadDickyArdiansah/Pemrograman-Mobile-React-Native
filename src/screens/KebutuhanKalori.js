import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import MyTextInput from '../assets/components/MyTextInput';
import MidButton from '../assets/components/MidButton';
import {ScrollView} from 'react-native-gesture-handler';
import FullButton from '../assets/components/FullButton';
import {Picker} from '@react-native-picker/picker';

const KebutuhanKalori = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [activityLevel, setActivityLevel] = useState('berat'); // Default: Berat
  const [calories, setCalories] = useState(null);

  const calculateCalories = () => {
    if (!height || !weight || !age || !gender || !activityLevel) {
      alert('Isi Kolom Dulu!');
    } else {
      const bmr = calculateBMR();
      const totalCalories = calculateTotalCalories(bmr);
      setCalories(totalCalories.toFixed(2));
    }
  };

  const calculateBMR = () => {
    const weightKg = parseFloat(weight);
    const heightCm = parseFloat(height);
    const ageYears = parseFloat(age);

    let bmr = 0;

    if (gender === 'male') {
      bmr = 88.362 + 13.397 * weightKg + 4.799 * heightCm - 5.677 * ageYears;
    } else if (gender === 'female') {
      bmr = 447.593 + 9.247 * weightKg + 3.098 * heightCm - 4.33 * ageYears;
    }

    return bmr;
  };

  const calculateTotalCalories = bmr => {
    let activityFactor = 1.2;

    if (activityLevel === 'ringan') {
      activityFactor = 1.375;
    }

    const totalCalories = bmr * activityFactor;
    return totalCalories;
  };

  const clearForm = () => {
    setHeight('');
    setWeight('');
    setAge('');
    setGender('');
    setActivityLevel('berat'); // Default: Berat
    setCalories(null);
  };

  const selectGender = selectedGender => {
    setGender(selectedGender);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.genderRow}>
          <TouchableOpacity
            style={[
              styles.genderButton,
              gender === 'male' && styles.selectedGenderButton,
            ]}
            onPress={() => selectGender('male')}>
            <Image source={require('../assets/images/male.png')} />
            <Text style={styles.textgender}>Laki-laki</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.genderButton,
              gender === 'female' && styles.selectedGenderButton,
            ]}
            onPress={() => selectGender('female')}>
            <Image source={require('../assets/images/female.png')} />
            <Text style={styles.textgender}>Perempuan</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text>Berat Badan (kg)</Text>
          <MyTextInput
            placeholder="Masukkan berat badan Anda"
            keyboardType="numeric"
            value={weight}
            onChangeText={text => setWeight(text)}
          />
          <Text>Tinggi (cm)</Text>
          <MyTextInput
            placeholder="Masukkan tinggi badan Anda"
            keyboardType="numeric"
            value={height}
            onChangeText={text => setHeight(text)}
          />
          <Text>Usia</Text>
          <MyTextInput
            placeholder="Masukkan usia Anda"
            keyboardType="numeric"
            value={age}
            onChangeText={text => setAge(text)}
          />

          <Text>Tingkat Aktivitas Fisik:</Text>
          <View style={styles.list}>
            <Picker
              selectedValue={activityLevel}
              onValueChange={itemValue => {
                setActivityLevel(itemValue);
              }}
              style={styles.picker}>
              <Picker.Item label="Berat" value="berat" />
              <Picker.Item label="Ringan" value="ringan" />
            </Picker>
          </View>

          <FullButton
            buttonText="Hitung Kebutuhan Kalori"
            onPress={calculateCalories}
          />
          <FullButton buttonText="Clear" onPress={clearForm} />
        </View>

        <View style={styles.hasil}>
          <Text>
            Kebutuhan Kalori :{' '}
            {calories !== null ? calories + ' kkal/hari' : ''}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  list: {
    borderWidth: 1,
    marginBottom: 20,
    borderColor: 'gray',
    borderRadius: 10,
  },
  activeButton: {
    backgroundColor: 'rgb(134, 65, 244)',
    borderRadius: 5,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    borderColor: 'blue',
    shadowColor: 'blue',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  inactiveButton: {
    backgroundColor: 'lightgray',
    borderRadius: 5,
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
  genderRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  genderButton: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  selectedGenderButton: {
    borderColor: 'blue',
    shadowColor: 'blue',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  textgender: {
    marginTop: 10,
  },
  inputContainer: {
    marginTop: 40,
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
  },
  hasil: {
    position: 'relative',
    top: 100,
    alignItems: 'center',
  },
});

export default KebutuhanKalori;
