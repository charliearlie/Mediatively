import { connect } from 'react-redux';
import Search from '../components/Search';
import ApiHoc from '../../globalComponents/ApiHoc';
import { performSearch } from '../../actions/searchActions';

const mapStateToProps = () => ({
});

const mapDispatchToProps = () => ({
	performSearch: query => console.log(query),
});


export default connect(mapStateToProps, mapDispatchToProps)(Search);
