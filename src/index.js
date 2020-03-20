import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import '~/config/ReactotronConfig';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import { store, persistor } from '~/store';
import Routes from '~/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes />
          <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
