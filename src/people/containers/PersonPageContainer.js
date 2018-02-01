import { connect } from 'react-redux';
import PersonPage from '../components/PersonPage';
import ApiHoc from '../../globalComponents/ApiHoc';
import { loadPerson } from '../../actions/personActions';

const mapStateToProps = (state) => {
	return {
		person: state.person
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const personId = ownProps.match ? ownProps.match.params.id : undefined;
	return {
		onLoad: () => dispatch(loadPerson(personId)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiHoc(PersonPage));
