import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RevealCard from '../../globalComponents/RevealCard';
// import getRatingClass from '../../globalComponents/helpers/ratingsHelper';


const HomePageCollection = (props) => {
	// const { Meta } = Card;
	const { collection } = props;
	// const cardStyles = width < 600 ? { padding: 0 } : null;

	return (
		<Fragment>
			{collection && collection.slice(0, 4).map(item => (
				<div className="col-xs-6 col-md-3 HomePage__Collection">
					<RevealCard
						title={item.title}
						image={item.poster_path}
						id={item.id}
						voteAverage={item.vote_average}
						voteCount={item.vote_count}
					/>
				</div>
			))}
		</Fragment>
	);
};

HomePageCollection.propTypes = {
	collection: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default HomePageCollection;
