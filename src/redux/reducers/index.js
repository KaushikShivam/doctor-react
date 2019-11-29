import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import doctor from './doctor';

export default combineReducers({
  alert,
  auth,
  doctor
});
