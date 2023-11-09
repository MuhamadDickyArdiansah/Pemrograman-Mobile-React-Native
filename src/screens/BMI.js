import React, {useState, useMemo} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import MyTextInput from '../assets/components/MyTextInput';
import FullButton from '../assets/components/FullButton';
import {ProgressCircle} from 'react-native-svg-charts';

import MidButton from '../assets/components/MidButton';

const BMI = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [bmiResult, setBmiResult] = useState(null);

  const validateForm = () => {
    if (!height || !weight || !gender) {
      alert('Isi Kolom Dulu!');
    } else {
      countBmi();
    }
  };

  const countBmi = () => {
    const bmi = (parseFloat(weight) / (parseFloat(height) / 100) ** 2).toFixed(
      2,
    );

    let result = '';
    if (bmi < 18.5) {
      result = 'Kurus';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result = 'Ideal';
    } else if (bmi >= 25 && bmi <= 29.9) {
      result = 'Gemuk';
    } else if (bmi >= 30 && bmi <= 34.9) {
      result = 'Sangat';
    } else if (bmi >= 35) {
      result = 'Obesitas';
    }

    setBmiResult({bmi, result});

    setHeight(prevHeight => '');
    setWeight(prevWeight => '');
  };

  const clearForm = () => {
    setHeight('');
    setWeight('');
    setGender('');
    setBmiResult(null);
  };

  const selectGender = selectedGender => {
    setGender(selectedGender);
  };

  const chartComponent = useMemo(
    () => (
      <ProgressCircle
        style={{height: 150}}
        progress={bmiResult ? bmiResult.bmi / 50 : 0} // Adjust the scale as needed
        progressColor={'rgb(134, 65, 244)'} // Custom color for the progress circle
      />
    ),
    [bmiResult],
  );

  return (
    <View style={styles.container}>
      <View style={styles.genderRow}>
        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === 'Male' && styles.selectedGenderButton,
          ]}
          onPress={() => selectGender('Male')}>
          <Image source={require('../assets/images/male.png')} />
          <Text style={styles.textgender}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === 'Female' && styles.selectedGenderButton,
          ]}
          onPress={() => selectGender('Female')}>
          <Image source={require('../assets/images/female.png')} />
          <Text style={styles.textgender}>Female</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text>Height</Text>
        <MyTextInput
          placeholder="Enter your height"
          onChangeText={text => setHeight(text)}
          value={height}
          keyboardType="numeric"
        />
        <Text>Weight</Text>
        <MyTextInput
          placeholder="Enter your Weight"
          onChangeText={text => setWeight(text)}
          value={weight}
          keyboardType="numeric"
        />
        <View style={styles.button}>
          <MidButton buttonText="Hitung BMI" onPress={validateForm} />
          <MidButton buttonText="Clear" onPress={clearForm} />
        </View>
      </View>

      <View style={styles.hasil}>
        <Text>BMI : {bmiResult ? bmiResult.bmi : ''}</Text>
        <Text>Hasil : {bmiResult ? bmiResult.result : ''}</Text>
      </View>

      {chartComponent}
    </View>
  );
};

export default BMI;

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  hasil: {
    position: 'relative',
    top: 100,
    alignItems: 'center',
  },
});
