import { connect } from 'react-redux';
import Search from '../components/Search';

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
	performSearch: query => dispatch({ type: 'PERFORM_SEARCH', payload: query }),
});


export default connect(mapStateToProps, mapDispatchToProps)(Search);
