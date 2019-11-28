import axios from 'axios';
import { setAlert } from './alert';

import { REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types';
import { BASE_URL, REGISTER } from '../../constants';

// Register
export const register = ({
  name,
  email,
  password,
  password_confirmation
}) => async dispatch => {
  try {
    const response = await axios.post(
      `${BASE_URL}${REGISTER}`,
      {
        user: {
          name,
          email,
          password,
          password_confirmation
        }
      },
      {
        withCredentials: true
      }
    );

    if (response.data.status === 'created') {
      dispatch({ type: REGISTER_SUCCESS, payload: response.data.user });
    }
  } catch (error) {
    dispatch(setAlert(`${error}`));
    dispatch({ type: REGISTER_FAIL });
  }
};
