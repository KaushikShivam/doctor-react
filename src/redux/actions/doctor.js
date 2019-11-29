import axios from 'axios';
import { BASE_URL, DOCTORS } from '../../constants';
import { ADD_DOCTOR } from './types';
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
    if (response.data.status == 'success') {
      dispatch({
        type: ADD_DOCTOR
      });
      dispatch(setAlert('Doctor created Successfully', 'success'));
    }
  } catch (error) {
    dispatch(setAlert(error, 'danger'));
  }
};
