import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import getRatingClass from '../../globalComponents/helpers/ratingsHelper';


const HomePageCollection = (props) => {
	const { Meta } = Card;
	const type = props.type || '';
	return (
		<div>
			{props.collection && props.collection.slice(0, 4).map(item => (
				<Link to={`/${type}/${item.id}`}>
					<div className="col-xs-3 HomePage__collection">
						<Card
							hoverable
							cover={<img alt={item.title} src={item.poster_path} />}
						>
							<Meta
								title={item.title}
								description={
									<div className={`rating ${getRatingClass(item.vote_average)} collection-rating`}>
										<p className="HomePage__collection-voteAverage">{item.vote_average}</p>
									</div>
								}
							/>
						</Card>
					</div>
				</Link>
			))}
		</div>
	);
};

HomePageCollection.propTypes = {
	collection: PropTypes.arrayOf().isRequired,
	type: PropTypes.string.isRequired,
};

export default HomePageCollection;
