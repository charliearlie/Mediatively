import axios from 'axios';
import { LOAD_POPULAR_SHOWS_SUCCESS, LOAD_SHOW_DETAILS_SUCCESS, LOAD_TODAYS_SHOWS_SUCCESS } from './actionTypes';

export function loadPopularShows() {
	return {
		type: LOAD_POPULAR_SHOWS_SUCCESS,
		payload: new Promise((resolve) => {
			axios.get('/shows/popular').then(response => resolve(response.data));
		}),
	};
}

export function loadTodaysShows() {
	return {
		type: LOAD_TODAYS_SHOWS_SUCCESS,
		payload: new Promise((resolve) => {
			axios.get('/shows/today').then(response => resolve(response.data));
		}),
	};
}

export function loadShowDetails(id) {
	return {
		type: LOAD_SHOW_DETAILS_SUCCESS,
		payload: new Promise((resolve) => {
			axios.post('/show', {
				query: `
				query ShowDetails {
					show(id: ${id}) {
					  title
					  backdropPath
					  numberOfSeasons
					  homepage
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
					  seasons {
						id, name, seasonNumber, episodeCount
					  },
					  reviews {
						author, id, content
					  },
					  cast {
						name, id, character, profilePath, order, gender
					  }
					}
				  }`,
			}).then(response => resolve(response.data.data.show));
		}),
	};
}
