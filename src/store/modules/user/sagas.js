import { Alert } from 'react-native';
import { takeLatest, put, call, all } from 'redux-saga/effects';

import { updateProfileFailure, updateProfileSuccess } from './actions';
import api from '~/services/api';
// import history from '~/services/history';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };

    const { data } = yield call(api.put, '/users', profile);

    Alert.alert('Sucesso', 'Perfil atualizado com sucesso !');

    yield put(updateProfileSuccess(data));
  } catch (err) {
    yield put(updateProfileFailure());
    Alert.alert('Falha na atualização', 'Verifique os seus dados !');
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
