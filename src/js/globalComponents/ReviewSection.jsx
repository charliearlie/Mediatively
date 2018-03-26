import React from 'react';
import PropTypes from 'prop-types';
import ReviewContent from './ReviewContent';

const ReviewSection = (props) => {
	const reviews = props.reviews.slice(0, 3);

	return (
		<div className="Reviews">
			<h2>Reviews (Design WIP)</h2>
			{reviews.map(review => (
				<div key={review.id} className="col-xs-12 Review">
					<div className="col-xs-3">
						<h4>{review.author}</h4>
					</div>
					<div className="col-xs-9">
						<ReviewContent content={review.content} />
					</div>
				</div>
			))}
		</div>
	);
};

ReviewSection.propTypes = {
	reviews: PropTypes.arrayOf().isRequired,
};

export default ReviewSection;
