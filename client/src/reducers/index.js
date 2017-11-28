import { combineReducers } from 'redux';
import shows from './showsReducer';
import viewedShow from './viewedShowReducer';

const rootReducer = combineReducers({
  shows,
  viewedShow
});

export default rootReducer;
