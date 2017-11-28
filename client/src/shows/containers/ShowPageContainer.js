import { connect } from 'react-redux';
import queryString from 'query-string';
import ShowPage from '../components/ShowPage';
import ApiHoc from '../../utilities/ApiHoc';
import { loadShowDetails } from '../../actions/showActions';

const mapStateToProps = (state, ownProps) => {
    return {
        showInfo: state.selectedShow
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const showId = ownProps.match ? ownProps.match.params.id : undefined;
    return {
        onLoad: () => {
            dispatch(loadShowDetails(showId))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiHoc(ShowPage));
