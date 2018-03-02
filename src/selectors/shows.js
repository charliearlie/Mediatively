export const getShowsHomePage = state => sectionName => state.shows[sectionName] || [];

export const getShowDetails = state => state.viewedShow;
