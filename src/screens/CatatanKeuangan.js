import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import FullButton from '../assets/components/FullButton';

const CatatanKeuangan = () => {
  const [tanggal, setTanggal] = useState('');
  const [catatan, setCatatan] = useState('');
  const [harga, setHarga] = useState('');
  const [catatanList, setCatatanList] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editedCatatanId, setEditedCatatanId] = useState(null);
  const [selectedCatatanId, setSelectedCatatanId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const tambahkanCatatan = () => {
    if (tanggal !== '' && catatan !== '' && harga !== '') {
      const newCatatan = {
        id: Math.random().toString(),
        tanggal: tanggal,
        catatan: catatan,
        harga: parseFloat(harga),
      };
      setCatatanList(prevCatatanList => [...prevCatatanList, newCatatan]);
      setTanggal('');
      setCatatan('');
      setHarga('');
    }
  };

  const editCatatan = catatanId => {
    const catatanToEdit = catatanList.find(item => item.id === catatanId);
    if (catatanToEdit) {
      setTanggal(catatanToEdit.tanggal);
      setCatatan(catatanToEdit.catatan);
      setHarga(catatanToEdit.harga.toString()); // Mengatur harga ke dalam string agar sesuai dengan input
      setEditing(true);
      setEditedCatatanId(catatanId);
    }
  };

  const simpanPerubahan = () => {
    if (editedCatatanId !== null) {
      const updatedCatatanList = catatanList.map(item => {
        if (item.id === editedCatatanId) {
          return {
            id: item.id,
            tanggal: tanggal,
            catatan: catatan,
            harga: parseFloat(harga),
          };
        }
        return item;
      });
      setCatatanList(updatedCatatanList);
      setEditing(false);
      setEditedCatatanId(null);
      setTanggal('');
      setCatatan('');
      setHarga('');
    }
  };

  const hapusCatatan = catatanId => {
    setCatatanList(prevCatatanList =>
      prevCatatanList.filter(item => item.id !== catatanId),
    );
  };

  const tampilkanOpsiEditHapus = catatanId => {
    setSelectedCatatanId(catatanId);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tanggal</Text>
      <TextInput
        style={styles.input}
        placeholder="Tanggal"
        value={tanggal}
        onChangeText={text => setTanggal(text)}
      />
      <Text style={styles.label}>Catatan</Text>
      <TextInput
        style={styles.input}
        placeholder="Catatan"
        value={catatan}
        onChangeText={text => setCatatan(text)}
      />
      <Text style={styles.label}>Harga</Text>
      <TextInput
        style={styles.input}
        placeholder="Harga"
        value={harga}
        keyboardType="numeric"
        onChangeText={text => setHarga(text)}
      />
      {editing ? (
        <FullButton buttonText="Simpan Perubahan" onPress={simpanPerubahan} />
      ) : (
        <FullButton buttonText="Tambah Catatan" onPress={tambahkanCatatan} />
      )}
      <Text style={styles.subtitle}>Daftar Catatan</Text>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Tanggal</Text>
        <Text style={styles.headerText}>Catatan</Text>
        <Text style={styles.headerText}>Harga</Text>
        <Text style={styles.headerText}>Aksi</Text>
      </View>
      <FlatList
        data={catatanList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.tanggal}</Text>
            <Text style={styles.itemText}>{item.catatan}</Text>
            <Text style={styles.itemText}>{item.harga}</Text>
            <TouchableOpacity onPress={() => tampilkanOpsiEditHapus(item.id)}>
              <Image
                source={require('../assets/images/hamburger.png')} // Ganti dengan gambar hamburger Anda
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        )}
      />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Image
              source={require('../assets/images/close.png')}
              style={styles.modalCloseButton}
            />
          </TouchableOpacity>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                editCatatan(selectedCatatanId);
              }}
              style={styles.modalButton}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
                hapusCatatan(selectedCatatanId);
              }}
              style={styles.hapusButton}>
              <Text style={styles.buttonText}>Hapus</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Tambahkan align items agar tombol di tengah
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemText: {
    flex: 1, // Agar teks bisa wrap (wrap text) jika terlalu panjang
  },
  icon: {
    width: 20,
    height: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalCloseButton: {
    top: 20,
    left: 70, // Menggeser tombol ke pojok kanan atas
  },
  modalButton: {
    backgroundColor: 'blue',
    padding: 10,
    marginVertical: 5,
    alignItems: 'center', // Memusatkan tombol di modal
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  hapusButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
  },
});

export default CatatanKeuangan;
