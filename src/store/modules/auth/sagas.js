import { Alert } from 'react-native';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { signInSuccess, signFailure } from './actions';
import api from '~/services/api';
// import history from '~/services/history';

export function* signIn({ payload }) {
  const { email, password } = payload;

  try {
    const {
      data: { user, token },
    } = yield call(api.post, '/session', { email, password });

    if (user.provider) {
      Alert.alert('Erro no login', 'GoBarber mobile é só para usuários !');
      return yield put(signFailure());
    }

    api.defaults.headers.authorization = `Bearer ${token}`;

    return yield put(signInSuccess(token, user));
  } catch (err) {
    Alert.alert('Erro no login', 'Verifique os seus dados !');

    return yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  const { name, email, password } = payload;

  try {
    return yield call(api.post, '/users', {
      name,
      email,
      password,
    });
  } catch (err) {
    Alert.alert('Erro no cadastro', 'Verifique os seus dados !');

    return put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
