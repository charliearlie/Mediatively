import React from 'react';
import PropTypes from 'prop-types';

export default function ApiHoc(WrappedComponent) {
    const ApiComponent = class extends React.Component {
        componentWillMount() {
            this.props.onLoad(this.props);
        }

        componentDidUpdate(previousProps) {
            if (this.props.shouldRefresh(previousProps, this.props)) {
                this.props.onLoad(this.props);
            }
        }

        render() {
            const { onLoad, shouldRefresh, ...otherProps } = this.props;
            return (<WrappedComponent {...otherProps} />);
        }
    };

    ApiComponent.propTypes = {
        onLoad: PropTypes.func.isRequired,
        shouldRefresh: PropTypes.func.isRequired,
    };

    ApiComponent.defaultProps = {
        onLoad: () => {},
        shouldRefresh: () => false,
    };

    return ApiComponent;
}