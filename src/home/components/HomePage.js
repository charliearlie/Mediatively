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
			<div className="App">
				<h1>Movies</h1>
				{this.state.movies.map(movie => <div key={movie.id}>{movie.title}</div>)}
			</div>
		);
	}
}

export default HomePage;
