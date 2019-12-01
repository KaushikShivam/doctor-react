import axios from 'axios';
import Qs from 'qs';
import { BASE_URL, DOCTORS } from '../../constants';
import {
  ADD_DOCTOR,
  GET_DOCTORS,
  GET_SINGLE_DOCTOR,
  DOCTOR_FILTER,
} from './types';
import { setAlert } from './alert';

export const addDoctor = (doctorObj) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${BASE_URL}${DOCTORS}`,
      {
        data: {
          attributes: { ...doctorObj },
        },
      },
      {
        withCredentials: true,
      },
    );

    dispatch({
      type: ADD_DOCTOR,
      action: response.data,
    });
    dispatch(setAlert('Doctor created Successfully', 'success'));
  } catch (error) {
    dispatch(setAlert(`${error}`, 'danger'));
  }
};

export const getDoctors = (filterObj = {}) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${BASE_URL}${DOCTORS}`,
      {
        params: {
          filter: {
            ...filterObj,
          },
        },
        paramsSerializer: (params) => Qs.stringify(params, { arrayFormat: 'brackets' }),
      },
      {
        withCredentials: true,
      },
    );

    const doctors = response.data.data.map(doc => ({ id: doc.id, ...doc.attributes }));
    dispatch({
      type: GET_DOCTORS,
      payload: doctors,
    });
  } catch (error) {
    dispatch(setAlert(`${error}`, 'danger'));
  }
};

export const getSingleDoctor = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}${DOCTORS}/${id}`, {
      withCredentials: true,
    });
    dispatch({
      type: GET_SINGLE_DOCTOR,
      payload: { ...response.data.data.attributes, id: response.data.data.id },
    });
  } catch (error) {
    dispatch(setAlert(`${error}`, 'danger'));
  }
};

export const setFilter = (obj) => ({
  type: DOCTOR_FILTER,
  payload: obj,
});
