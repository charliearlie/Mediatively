import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class ReviewContent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showMore: false,
		};

		this.toggleShowMore = this.toggleShowMore.bind(this);
	}

	toggleShowMore() {
		this.setState(prevState => ({ showMore: !prevState.showMore }));
	}

	renderContent() {
		return !this.state.showMore && this.props.content.length > 100 ?
			this.props.content.slice(0, 250) : this.props.content;
	}

	render() {
		const { showMore } = this.state;
		return (
			<Fragment>
				{this.renderContent()}
				{/* eslint-disable  */}
				{ this.props.content.length > 250 ? 
					<a onClick={this.toggleShowMore}>Show {showMore ? 'less' : 'more'}</a> : ''}
				{/* eslint-enable  */}
			</Fragment>
		);
	}
}

ReviewContent.propTypes = {
	content: PropTypes.string.isRequired,
};

export default ReviewContent;
