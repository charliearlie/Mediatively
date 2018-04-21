import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* TODO: Reveal card animation */
class RevealCard extends Component {
	constructor(props) {
		super(props);

		this.state = { isOpen: false };

		this.toggleReveal = this.toggleReveal.bind(this);
		this.renderOverlay = this.renderOverlay.bind(this);
	}

	toggleReveal() {
		this.setState(prevState => ({ isOpen: !prevState.isOpen }));
	}

	renderOverlay() {
		return (
			<div key="reveal" className="RevealCard__reveal">
				<div className="RevealCard__reveal-header">
					<div>
						<p className="RevealCard__reveal-title">{this.props.title}</p>
						<p className="RevealCard__reveal-subheader">2018</p>
					</div>
					<button className="RevealCard__reveal-close" onClick={() => this.toggleReveal()}>
						<i className="far fa-window-close fa-2x" />
					</button>
				</div>
			</div>
		);
	}

	render() {
		const { isOpen } = this.state;
		return (
			<div className="card RevealCard">
				<div className="RevealCard__image-container">
					<Link to={`/movie/${this.props.id}`}>
						<img
							className="RevealCard__image image-responsive"
							src={this.props.image}
							alt={this.props.title}
						/>
					</Link>
				</div>
				<div className="RevealCard__content">
					<h5>{this.props.title}</h5>
					<div className="RevealCard__menu">
						<a role="button" onClick={() => this.toggleReveal()}>
							<i className="fas fa-ellipsis-v" />
						</a>
					</div>
				</div>
				{ isOpen &&
					this.renderOverlay()
				}
			</div>
		);
	}
}

RevealCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};

export default RevealCard;
