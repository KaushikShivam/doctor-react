import {
  ADD_DOCTOR,
  GET_DOCTORS,
  GET_SINGLE_DOCTOR,
  DOCTOR_FILTER
} from '../actions/types';

const initialState = {
  singleDoctor: null,
  doctors: [],
  filter: null
};

const doctor = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DOCTORS:
      return { ...state, doctors: payload };
    case GET_SINGLE_DOCTOR:
      return { ...state, singleDoctor: payload };
    case ADD_DOCTOR:
    default:
      return state;
  }
};

export default doctor;
