import axios from 'axios';
import {
	LOAD_POPULAR_MOVIES_SUCCESS,
	LOAD_UPCOMING_MOVIES_SUCCESS,
	LOAD_MOVIE_DETAILS_SUCCESS,
	LOAD_BOX_OFFICE_MOVIES,
	CLEAR_MOVIE,
} from './actionTypes';

export function loadPopularMovies() {
	return {
		type: LOAD_POPULAR_MOVIES_SUCCESS,
		payload: new Promise((resolve) => {
			axios.get('movies/popular').then(response => resolve(response.data));
		}),
	};
}

export function loadUpcomingMovies() {
	return {
		type: LOAD_UPCOMING_MOVIES_SUCCESS,
		payload: new Promise((resolve) => {
			axios.get('movies/upcoming').then(response => resolve(response.data));
		}),
	};
}

export function loadMovieDetails(movieId) {
	return {
		type: LOAD_MOVIE_DETAILS_SUCCESS,
		payload: new Promise((resolve) => {
			axios.post('/movie', {
				query: `
					query MovieDetails {
						movie(id: ${movieId}) {
							title
							backdropPath
							budget
							homepage
							revenue
							voteAverage
							voteCount
							posterPath
							runtime
							overview
							id
							releaseDate
							genres {
								id,
								name
							},
							videos {
								id, key, name, type
							},
							suggestedMovies {
								id, posterPath, releaseDate, title
							},
							reviews {
								author, id, content
							},
							cast {
								name, id, character, profilePath, order, gender
							}
						},
					}`,
			}).then(response => resolve(response.data.data.movie));
		}),
	};
}

export function loadBoxOfficeMovies() {
	return {
		type: LOAD_BOX_OFFICE_MOVIES,
		payload: new Promise((resolve) => {
			axios.get('/movies/nowplaying/GB').then(response => resolve(response.data));
		}),
	};
}

export function clearViewedMovie() {
	return {
		type: CLEAR_MOVIE,
	};
}
