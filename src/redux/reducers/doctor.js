import { ADD_DOCTOR, GET_DOCTORS } from '../actions/types';

const initialState = {
  doctors: []
};

const doctor = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DOCTORS:
      return { ...state, doctors: payload };
    case ADD_DOCTOR:
    default:
      return state;
  }
};

export default doctor;
