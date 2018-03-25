import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import getRatingClass from '../../globalComponents/helpers/ratingsHelper';


const HomePageCollection = (props) => {
	const { Meta } = Card;
	const type = props.type || '';
	const { collection, width } = props;
	const cardStyles = width < 600 ? { padding: 0 } : null;

	return (
		<div>
			{collection && collection.slice(0, 4).map(item => (
				<Link to={`/${type}/${item.id}`} key={item.id}>
					<div className="col-xs-6 col-sm-3 HomePage__collection">
						<Card
							hoverable
							bodyStyle={cardStyles}
							cover={<img alt={item.title} src={item.poster_path} />}
						>
							{ width > 600 &&
								<Meta
									title={item.title}
									description={
										<div className={`rating ${getRatingClass(item.vote_average)} collection-rating`}>
											<p className="HomePage__collection-voteAverage">{item.vote_average}</p>
										</div>
									}
								/>
							}
						</Card>
					</div>
				</Link>
			))}
		</div>
	);
};

HomePageCollection.propTypes = {
	collection: PropTypes.arrayOf(PropTypes.object).isRequired,
	type: PropTypes.string.isRequired,
	width: PropTypes.number,
};

HomePageCollection.defaultProps = {
	width: 1080,
};

export default HomePageCollection;
