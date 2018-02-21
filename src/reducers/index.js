import { combineReducers } from 'redux';
import shows from './showsReducer';
import viewedShow from './viewedShowReducer';
import movies from './moviesReducer';
import viewedMovie from './viewedMovieReducer';
import person from './personReducer';

const rootReducer = combineReducers({
	shows,
	viewedShow,
	movies,
	viewedMovie,
	person
});

export default rootReducer;
