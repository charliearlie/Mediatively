import { combineReducers } from 'redux';
import shows from './showReducer';

const rootReducer = combineReducers({
  shows
});

export default rootReducer;
