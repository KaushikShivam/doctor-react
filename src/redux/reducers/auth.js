import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGGED_IN,
  AUTH_ERROR
} from '../actions/types';

const initialState = {
  isAuthenticated: null,
  user: null
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return { user: payload, isAuthenticated: true };
    case REGISTER_FAIL:
    case AUTH_ERROR:
      return { user: null, isAuthenticated: false };
    case LOGGED_IN:
      return { user: payload, isAuthenticated: true };
    default:
      return state;
  }
};

export default auth;
