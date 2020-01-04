import axios from 'axios';
import { CREATE_APPOINTMENT, GET_APPOINTMENTS } from './types';
import { BASE_URL, APPOINTMENTS } from '../../constants';
import { setAlert } from './alert';

export const getAppointments = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}${APPOINTMENTS}`, {
      withCredentials: true,
    });
    dispatch({
      type: GET_APPOINTMENTS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch(setAlert(`${error}`, 'danger'));
  }
};

export const createAppointment = (appointmentObj) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${BASE_URL}${APPOINTMENTS}`,
      {
        data: {
          attributes: {
            ...appointmentObj,
          },
        },
      },
      {
        withCredentials: true,
      },
    );

    dispatch({
      type: CREATE_APPOINTMENT,
      payload: response.data.data.attributes,
    });
    dispatch(setAlert('Appointment created Successfully', 'success'));
  } catch (error) {
    dispatch(setAlert(`${error}`, 'danger'));
  }
};
