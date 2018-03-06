import React from 'react';
import PropTypes from 'prop-types';

export default function ApiHoc(WrappedComponent) {
	const ApiComponent = class extends React.Component {
		componentWillMount() {
			this.props.onLoad(this.props);
		}

		// Fix this function
		// componentDidUpdate(previousProps) {
		// 	if (this.props.shouldRefresh(previousProps, this.props)) {
		// 		this.props.onLoad(this.props);
		// 	}
		// }

		render() {
			const { onLoad, ...otherProps } = this.props;
			return (<WrappedComponent {...otherProps} />);
		}
	};

	ApiComponent.propTypes = {
		onLoad: PropTypes.func.isRequired,
	};

	return ApiComponent;
}
