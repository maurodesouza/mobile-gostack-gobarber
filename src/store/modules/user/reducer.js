import { produce } from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, actions) {
  return produce(state, draft => {
    switch (actions.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        const { user: profile } = actions.payload;

        draft.profile = profile;
        break;
      }

      case '@user/UPDATE_PROFILE_SUCCESS': {
        const { profile } = actions.payload;

        draft.profile = profile;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }

      default:
    }
  });
}
