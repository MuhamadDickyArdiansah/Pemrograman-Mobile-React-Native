import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CardKotak from '../assets/components/CardKotak';
import CardPanjang from '../assets/components/CardPanjang';
import {useRoute} from '@react-navigation/native';

const Dashboard = ({navigation}) => {
  const route = useRoute();
  const username = route.params.nama;
  const data = [
    {
      key: '1',
      text: 'Kalkulasi',
      src: require('../assets/images/calculator-notebook.jpg'),
    },
    {
      key: '2',
      text: 'Konversi',
      src: require('../assets/images/back-school.jpg'),
    },
    {
      key: '3',
      text: 'CatatanKalKulator',
      src: require('../assets/images/20423.jpg'),
    },

    // Tambahkan data kartu lainnya sesuai kebutuhan
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => navigation.navigate(item.text)}>
      <CardKotak text={item.text} src={item.src} />
    </TouchableOpacity>
  );

  const CardSeparator = () => {
    return <View style={{width: 20}} />; // Ubah nilai width sesuai dengan kebutuhan jarak yang Anda inginkan
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text>Hello {username}</Text>
          <Text>What are you to do?</Text>
        </View>
        <Image source={require('../assets/images/fotofeed2.png')} />
      </View>

      <View style={styles.kategori}>
        <View style={styles.title}>
          <Text style={styles.textTitle}>Kategori</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={CardSeparator}
        />
      </View>
      <View style={styles.frequently}>
        <View style={styles.title}>
          <Text style={styles.textTitle}>Sering Digunakan</Text>
        </View>
        <View style={styles.card}>
          <CardPanjang
            src={require('../assets/images/calculator.png')}
            text="Kalkulator"
            onPress={() => navigation.navigate('Kalkulator')}
          />
          <CardPanjang
            src={require('../assets/images/change.png')}
            text="Konversi Mata Uang"
            onPress={() => navigation.navigate('KonversiMataUang')}
          />
          <CardPanjang
            src={require('../assets/images/bmi.png')}
            text="Nilai"
            onPress={() => navigation.navigate('Nilai')}
          />
          <CardPanjang
            src={require('../assets/images/temperature.png')}
            text="Konversi Suhu"
            onPress={() => navigation.navigate('KonversiSuhu')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  kategori: {
    marginTop: 30,
  },
  frequently: {
    marginTop: 30,
  },
  card: {
    rowGap: 30,
    marginBottom: 90,
  },
  title: {
    marginBottom: 20,
  },
  textTitle: {
    fontSize: 16,
  },
});
