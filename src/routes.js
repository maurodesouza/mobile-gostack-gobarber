import React from 'react';
import { TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

import Confirm from '~/pages/New/Confirm';
import SelectProvider from '~/pages/New/SelectProvider';
import SelectTimeDate from '~/pages/New/SelectTimeDate';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const newStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerTransparent: true,
      headerTintColor: '#fff',
      headerLeftContainerStyle: { marginLeft: 20 },
      headerTitleAlign: 'center',
    }}
  >
    <Stack.Screen
      name="SelectProvider"
      component={SelectProvider}
      options={{
        title: 'Selecione o prestador',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <Icon name="chevron-left" size={20} color="#fff" />
          </TouchableOpacity>
        ),
      }}
    />
    <Stack.Screen
      name="SelectTimeDate"
      component={SelectTimeDate}
      options={{
        title: 'Selecione o horário',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" size={20} color="#fff" />
          </TouchableOpacity>
        ),
      }}
    />
    <Stack.Screen
      name="Confirm"
      component={Confirm}
      options={{
        title: 'Comfirmar agendamento',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" size={20} color="#fff" />
          </TouchableOpacity>
        ),
      }}
    />
  </Stack.Navigator>
);

export default (signed = false) => {
  return !signed ? (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  ) : (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        keyboardHidesTabBar: true,
        style: {
          backgroundColor: '#8d41a8',
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 10,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Agendamentos',
          tabBarIcon: ({ color }) => (
            <Icon name="event" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="New"
        component={newStack}
        options={{
          tabBarVisible: false,
          tabBarLabel: 'Agendar',
          tabBarIcon: ({ color }) => (
            <Icon name="add-circle-outline" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Meu perfil',
          tabBarIcon: ({ color }) => (
            <Icon name="person" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
