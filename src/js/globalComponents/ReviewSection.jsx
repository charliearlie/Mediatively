import React from 'react';
import PropTypes from 'prop-types';
import LimitedSizeContent from './limitedSizeContent';

const ReviewSection = (props) => {
	const reviews = props.reviews.slice(0, 3);

	return (
		<div className="Reviews">
			<h2>Reviews (Design WIP)</h2>
			{reviews.map(review => (
				<div key={review.id} className="col-xs-12 Review">
					<div className="col-xs-3 Review__Author">
						<h4>{review.author}</h4>
					</div>
					<div className="col-xs-9">
						<LimitedSizeContent content={review.content} size={250} />
					</div>
				</div>
			))}
		</div>
	);
};

ReviewSection.propTypes = {
	reviews: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		author: PropTypes.string,
		content: PropTypes.string,
		url: PropTypes.string,
	})).isRequired,
};

export default ReviewSection;
