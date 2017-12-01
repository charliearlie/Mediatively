import { combineReducers } from 'redux';
import shows from './showsReducer';
import viewedShow from './viewedShowReducer';
import movies from './moviesReducer';
import viewedMovie from './viewedMovieReducer';

const rootReducer = combineReducers({
  shows,
  viewedShow,
  movies,
  viewedMovie
});

export default rootReducer;
