import axios from 'axios';
import { setAlert } from './alert';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGGED_IN,
  AUTH_ERROR
} from '../actions/types';

import { BASE_URL, REGISTER, STATUS } from '../../constants';

//Check logged in status
export const loggedIn = () => async dispatch => {
  try {
    const response = await axios.get(`${BASE_URL}${STATUS}`, {
      withCredentials: true
    });
    if (response.data.logged_in) {
      dispatch({
        type: LOGGED_IN,
        payload: response.data.user
      });
    }
  } catch (error) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

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
