import { ADD_DOCTOR } from '../actions/types';

const initialState = {
  doctors: []
};

const doctor = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_DOCTOR:
    default:
      return state;
  }
};

export default doctor;
