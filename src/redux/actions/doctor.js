import axios from 'axios';
import { BASE_URL, DOCTORS } from '../../constants';
import { ADD_DOCTOR, GET_DOCTORS } from './types';
import { setAlert } from './alert';

export const addDoctor = doctorObj => async dispatch => {
  try {
    const response = await axios.post(
      `${BASE_URL}${DOCTORS}`,
      {
        data: {
          attributes: { ...doctorObj }
        }
      },
      {
        withCredentials: true
      }
    );

    dispatch({
      type: ADD_DOCTOR,
      action: response.data
    });
    dispatch(setAlert('Doctor created Successfully', 'success'));
  } catch (error) {
    dispatch(setAlert(`${error}`, 'danger'));
  }
};

export const getDoctors = (filter = null) => async dispatch => {
  try {
    const response = await axios.get(`${BASE_URL}${DOCTORS}`, {
      withCredentials: true
    });
    dispatch({
      type: GET_DOCTORS,
      payload: response.data.data
    });
  } catch (error) {
    dispatch(setAlert(`${error}`, 'danger'));
  }
};
