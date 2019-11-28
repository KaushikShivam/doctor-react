import { REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types';

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
      return { user: null, isAuthenticated: false };
    default:
      return state;
  }
};

export default auth;
