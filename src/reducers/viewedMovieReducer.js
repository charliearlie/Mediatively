import * as types from '../actions/actionTypes';

function selectFeaturedTrailer(videos) {
	const officialTrailer = videos.find(video => video.name.includes('Official Trailer'));
	return officialTrailer ? officialTrailer.key : videos[0].key;
}

export default function viewedMovieReducer(state = {}, action) {
	switch (action.type) {
	case types.LOAD_MOVIE_DETAILS_SUCCESS:
		return Object.assign({}, state, action.payload);
	case types.ADD_CREDITS_TO_MOVIE:
		return Object.assign({}, state, { credits: action.payload });
	case types.ADD_YOUTUBE_ID_TO_MOVIE:
		return Object.assign({}, state, { videoId: selectFeaturedTrailer(action.payload) });
	default:
		return state;
	}
}
