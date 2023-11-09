import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Kalkulator from '../screens/Kalkulator';
import BMI from '../screens/BMI';
import KonversiMataUang from '../screens/KonversiMataUang';
import KonversiSuhu from '../screens/KonversiSuhu';
import Profile from '../screens/Profile';
import Nilai from '../screens/Nilai';
import CatatanKeuangan from '../screens/CatatanKeuangan';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Kalkulasi from '../screens/Kalkulasi';
import Konversi from '../screens/Konversi';
import KebutuhanKalori from '../screens/KebutuhanKalori';
import About from '../screens/About';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Login"
      component={Login}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="Register"
      component={Register}
      options={{headerShown: false}}
    />
  </AuthStack.Navigator>
);

const TabNavigator = ({route}) => (
  <Tab.Navigator>
    <Tab.Screen
      name="Dashboard"
      component={Dashboard}
      initialParams={{nama: route.params.nama}} // Kirim parameter nama dari Login
      options={{
        headerShown: false,
        tabBarLabel: () => null,
        tabBarIcon: ({focused}) => (
          <Image
            source={require('../assets/images/icons/homi.png')}
            style={{tintColor: focused ? '#07A0B0' : 'black', width: 32}}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Konversi"
      component={Konversi}
      options={{
        tabBarHideOnKeyboard: true,
        headerShown: true,
        tabBarLabel: () => null,
        tabBarIcon: ({focused}) => (
          <Image
            source={require('../assets/images/icons/convert.png')}
            style={{tintColor: focused ? '#07A0B0' : 'black'}}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Catatan Keuangan"
      component={CatatanKeuangan}
      options={{
        headerShown: true,
        tabBarHideOnKeyboard: true,
        tabBarLabel: () => null,
        tabBarIcon: ({focused}) => (
          <Image
            source={require('../assets/images/icons/bookkeeping.png')}
            style={{tintColor: focused ? '#07A0B0' : 'black'}}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Kalkulasi"
      component={Kalkulasi}
      options={{
        headerShown: true,
        tabBarHideOnKeyboard: true,
        tabBarLabel: () => null,
        tabBarIcon: ({focused}) => (
          <Image
            source={require('../assets/images/icons/bmii.png')}
            style={{tintColor: focused ? '#07A0B0' : 'black'}}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        headerShown: true,
        tabBarLabel: () => null,
        tabBarIcon: ({focused}) => (
          <Image
            source={require('../assets/images/icons/profile.png')}
            style={{tintColor: focused ? '#07A0B0' : 'black', width: 32}}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const index = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Auth"
        component={AuthNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dashboard"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="BMI" component={BMI} />
      <Stack.Screen name="Kalkulator" component={Kalkulator} />
      <Stack.Screen name="KebutuhanKalori" component={KebutuhanKalori} />
      <Stack.Screen name="KonversiMataUang" component={KonversiMataUang} />
      <Stack.Screen name="KonversiSuhu" component={KonversiSuhu} />
      <Stack.Screen name="Nilai" component={Nilai} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default index;
