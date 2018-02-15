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
				<div className="HomePage__content card" style={{ height: '200px', textAlign: 'left' }}>
					<div className="col-md-9">
						<h2>Upcoming movies</h2>
						<div className="col-md-4">
							{console.log(this.state.movies)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
