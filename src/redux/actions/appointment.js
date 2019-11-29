import axios from 'axios';
import { CREATE_APPOINTMENT, GET_APPOINTMENTS } from './types';
import { BASE_URL, APPOINTMENTS } from '../../constants';
import { setAlert } from './alert';

const getAppointments = () => dispatch => {
  try {
    const response = await axios.get(`${BASE_URL}${APPOINTMENTS}`, {
      withCredentials: true
    });
    dispatch({
      type: GET_APPOINTMENTS,
      action: response.data.data
    });
  } catch (error) {
    dispatch(setAlert(`${error}`, 'danger'));
  }
};


const createAppointment = appointmentObj => dispatch => {
  try {
    const response = axios.post(`${BASE_URL}${APPOINTMENTS}`, {
      ...appointmentObj
    }, {
      withCredentials: true
    })
    
    dispatch({
      type: GET_APPOINTMENTS,
      action: response.data.data
    });
    dispatch(setAlert('Doctor created Successfully', 'success'));
    
  } catch (error) {
    dispatch(setAlert(`${error}`, 'danger'));
  }
}