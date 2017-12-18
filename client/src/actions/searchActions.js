import * as types from './actionTypes';

export const clearResults = () => {
    return {type: types.SEARCH_RESET, action};
};

export const searchActions = (propsCriteria) => {
    const movePage = movement => (existingCriteria) => {
        const { pageSize, fromElement } = existingCriteria;
        const newFromElement = Number(fromElement) + (movement * Number(pageSize));
        return { fromElement: newFromElement };
    };

    const jumpTo = page => (existingCriteria) => {
        const { pageSize } = existingCriteria;
        const fromElement = pageSize * (page - 1);
        return { fromElement };
    };

    const jumpTo = page => (existingCriteria) => {
        const { pageSize } = existingCriteria;
        const fromElement = pageSize * (page - 1);
        return { fromElement };
    };

    const updateSearch = criteriaUpdater => (dispatch, getState) => {
        //Update the search. Maybe this will be on load?
    };
    
    return {
        jumpToPage: page => updateSearch(jumpTo(page)),
        nextPage: updateSearch(movePage(+1)),
        previousPage: updateSearch(movePage(-1)),
        changeSearchType: type => updateSearch(() => ({ type })),
        changeSearchTerm: term => updateSearch(() => ({ term, fromElement: 0 })),
        resetSearch: dispatch(clearResults())
    };
}