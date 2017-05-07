import { combineReducers } from 'redux';
import ContactReducer from './reducer_contact';

const rootReducer = combineReducers({
  contact: ContactReducer
});

export default rootReducer;
