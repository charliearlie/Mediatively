import React, { Component } from 'react';
import '../../App.css';

class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			movies: [],
		};
	}

	componentDidMount() {
		fetch('/movies/upcoming')
			.then(res => res.json())
			.then(movies => this.setState({ movies: movies.results }));
	}
	render() {
		return (
			<div className="HomePage text-center">
				<div className="col-12 card HomePage__banner">
					<div className="HomePage__title-container">
						<h1 className="HomePage__title">Mediatively</h1>
					</div>
				</div>
				<div className="HomePage__content card">
					<h1>Movies</h1>
					{this.state.movies.map(movie => <div key={movie.id}>{movie.title}</div>)}
				</div>
			</div>
		);
	}
}

export default HomePage;
