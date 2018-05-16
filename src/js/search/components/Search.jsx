import React, { Component } from 'react';
import classnames from 'classnames';

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			query: '',
		};

		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(e) {
		this.setState({ query: e.target.value });
	}

	render() {
		const buttonClasses = classnames('Search__Button', {
			'Search__Button--primary': this.props.type === 'primary',
			'Search__Button--secondary': this.props.type === 'secondary',
		});

		return (
			<div className="Search">
				<input
					type="text"
					className="Search__Input"
					value={this.state.query}
					onChange={this.handleInput}
					placeholder="Search"
				/>
				<button
					className={buttonClasses}
					onClick={this.props.performSearch}
				>
					<i className="fas fa-search" />
				</button>
			</div>
		);
	}
}

export default Search;
