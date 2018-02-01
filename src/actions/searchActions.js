// import * as types from './actionTypes';

// const clearResults = () => {
// 	return { type: types.SEARCH_RESET, action };
// };

// const performSearch = (query) => {
// 	fetch(`/search/`)
// }

// // eslint-disable-next-line react/prop-types
// export default const searchActions = () => {
// 	const movePage = movement => (existingCriteria) => {
// 		console.log(getState());
// 	};

// 	const jumpTo = page => (dispatch, getState) => {
// 		console.log(getState());
// 	};

// 	const updateSearch = criteriaUpdater => (dispatch, getState) => {
// 		//Update the search. Maybe this will be on load?
// 	};

// 	return {
// 		jumpToPage: page => updateSearch(jumpTo(page)),
// 		nextPage: updateSearch(movePage(+1)),
// 		previousPage: updateSearch(movePage(-1)),
// 		changeFilter: filter => updateSearch(() => ({ filter })),
// 		resetSearch: dispatch(clearResults()),
// 		performSearch: dispatch(performSearch(query))
// 	};
// }
