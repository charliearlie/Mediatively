import { combineReducers } from 'redux';
import shows from './showsReducer';
import viewedShow from './viewedShowReducer';
import movies from './moviesReducer';

const rootReducer = combineReducers({
  shows,
  viewedShow,
  movies
});

export default rootReducer;
