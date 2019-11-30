import axios from 'axios';
import { BASE_URL, DOCTORS } from '../../constants';
import {
  ADD_DOCTOR,
  GET_DOCTORS,
  GET_SINGLE_DOCTOR,
  DOCTOR_FILTER
} from './types';
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
    const doctors = response.data.data.map(doc => {
      return { id: doc.id, ...doc.attributes };
    });
    dispatch({
      type: GET_DOCTORS,
      payload: doctors
    });
  } catch (error) {
    dispatch(setAlert(`${error}`, 'danger'));
  }
};

export const getSingleDoctor = id => async dispatch => {
  try {
    const response = await axios.get(`${BASE_URL}${DOCTORS}/${id}`, {
      withCredentials: true
    });
    dispatch({
      type: GET_SINGLE_DOCTOR,
      payload: { ...response.data.data.attributes, id: response.data.data.id }
    });
  } catch (error) {
    dispatch(setAlert(`${error}`, 'danger'));
  }
};

// export const addDoctorFilter = (filter = null) => async dispatch => {
//   try {
//     const response = await axios.get(`${BASE_URL}${DOCTORS}`, {
//       filter: {
//         name: ''
//       }
//     },{
//       withCredentials: true
//     });
//   } catch (error) {
//     dispatch(setAlert(`${error}`, 'danger'));
//   }
// }
