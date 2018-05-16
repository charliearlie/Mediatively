import { connect } from 'react-redux';
import Search from '../components/Search';
import ApiHoc from '../../globalComponents/ApiHoc';
import { searchActions } from '../../actions/searchActions';

const mapStateToProps = state => ({
	results: state.search.results,
	numberOfResults: state.search.numberOfResults,
	totalPages: state.search.totalPages,
	currentPage: state.search.page
});

const mapDispatchToProps = (dispatch, ownProps) => {
	const query = ownProps.match ? ownProps.match.params.query : undefined;
	const {changeFilter, updateSearch, jumpToPage, resetSearch, movePage} = searchActions;
	return {
		performSearch: () => dispatch(performSearch(query)),
		onFilterChange: type => dispatch(changeFilter(filter)),
		onPageChange: pageNumber => dispatch(updateSearch(jumpToPage(pageNumber))),
		resetSearch: () => dispatch(resetSearch()),
		onNextPage: () => dispatch(updateSearch(movePage(+1))),
		onPreviousPage: () => dispatch(updateSearch(movePage(-1)))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiHoc(Search));
