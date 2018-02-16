import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';
import HomePageCollection from './HomePageCollection';


const HomePage = (props) => {
	const { boxOffice } = props;
	return (
		<div className="HomePage text-center">
			<div className="col-12 card HomePage__banner">
				<div className="HomePage__title-container">
					<h1 className="HomePage__title">Mediatively</h1>
				</div>
			</div>
			<div className="col-md-12 card">
				<div className="col-md-9 HomePage__content" style={{ textAlign: 'left', paddingLeft: '-16px' }}>
					<h2>In Cinemas</h2>
					<HomePageCollection type="movie" collection={boxOffice} />
				</div>
				<div className="col-md-3 HomePage__column" style={{ textAlign: 'left', paddingLeft: '-16px' }}>
					<h2>Local</h2>
					<ul>
						<li>
							<p>Everyman Muswell Hill</p>
							<p>Fortis Green Road</p>
						</li>
						<li>
							<p>Vue North Finchley</p>
							<p>Great North Leisure Park</p>
						</li>
						<li>
							<p>Crouch End Picturehouse</p>
							<p>165 Tottenham Ln</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

HomePage.propTypes = {
	boxOffice: PropTypes.arrayOf().isRequired,
};

export default HomePage;
