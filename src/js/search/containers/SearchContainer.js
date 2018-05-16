import { connect } from 'react-redux';
import Search from '../components/Search';
import ApiHoc from '../../globalComponents/ApiHoc';
import { performSearch } from '../../actions/searchActions';

const mapStateToProps = state => ({
	results: state.search.results,
	numberOfResults: state.search.numberOfResults,
	totalPages: state.search.totalPages,
	currentPage: state.search.page,
});

const mapDispatchToProps = dispatch => ({
	performSearch: query => dispatch(performSearch(query)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ApiHoc(Search));
