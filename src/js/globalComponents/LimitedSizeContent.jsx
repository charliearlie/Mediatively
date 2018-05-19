import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class LimitedSizeContent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showMore: false,
		};
	}

	toggleShowMore = () => {
		this.setState(prevState => ({ showMore: !prevState.showMore }));
	}

	renderContent() {
		const { content, size } = this.props;
		if (!this.state.showMore && content.length > size) {
			const string = content.slice(0, size);

			return `${string.slice(0, string.lastIndexOf(' ') + 1)}...`;
		}

		return content;
	}

	render() {
		const { content, size } = this.props;
		const { showMore } = this.state;
		return (
			<Fragment>
				<span className="Review__Content">{this.renderContent()}</span>
				{/* eslint-disable  */}
				{ content.length > size ? 
					<a onClick={this.toggleShowMore}> Show {showMore ? 'less' : 'more'}</a> : ''}
				{/* eslint-enable  */}
			</Fragment>
		);
	}
}

LimitedSizeContent.propTypes = {
	content: PropTypes.string.isRequired,
	size: PropTypes.number,
};

LimitedSizeContent.defaultProps = {
	size: 200,
};

export default LimitedSizeContent;
