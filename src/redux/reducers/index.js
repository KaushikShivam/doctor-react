import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import doctor from './doctor';
import appointment from './appointment';

export default combineReducers({
  alert,
  auth,
  doctor,
  appointment,
});
