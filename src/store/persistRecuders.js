import Asyncstorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const reducersPersist = persistReducer(
    {
      key: 'gobarber',
      storage: Asyncstorage,
      whitelist: ['user', 'auth'],
    },
    reducers
  );

  return reducersPersist;
};
