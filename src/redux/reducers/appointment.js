import { GET_APPOINTMENTS, CREATE_APPOINTMENT } from '../actions/types';

const initialState = {
  appointment: null,
  appointments: []
};

const appointment = (state = initialState, action) => {
  const { type, payload } = action;
};

export default appointment;
