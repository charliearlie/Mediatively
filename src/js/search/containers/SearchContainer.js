import { connect } from 'react-redux';
import Search from '../components/Search';

const mapStateToProps = () => ({
});

const mapDispatchToProps = () => ({
	performSearch: query => console.log(query),
});


export default connect(mapStateToProps, mapDispatchToProps)(Search);
