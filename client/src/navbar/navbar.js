import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

const NavBar = () => {
	return (
		<nav className="navbar navbar-default navbar-fixed-top">
			<div className="container">
				
				<div className="navbar-header">
					<button
						type="button"
						className="navbar-toggle collapsed"
						data-toggle="collapse"
						data-target="#navbar"
						aria-expanded="false"
						aria-controls="navbar">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand" href="#">Show Tracker</a>
				</div>
				<div id="navbar" className="navbar-collapse collapse">
					<ul className="nav navbar-nav">
						<li>
							<a href="/">Home</a>
						</li>
						<NavDropdown eventKey={3} title="Movies" id="basic-nav-dropdown">
							<MenuItem><Link to="/movies">Popular</Link></MenuItem>
							<MenuItem eventKey={3.2}>Upcoming</MenuItem>
							<MenuItem eventKey={3.3}>Top rated</MenuItem>
							<MenuItem divider />
							<MenuItem eventKey={3.3}>Top 100</MenuItem>
						</NavDropdown>
						<NavDropdown eventKey={3} title="Shows" id="basic-nav-dropdown">
							<MenuItem><a href="/shows">Popular</a></MenuItem>
							<MenuItem eventKey={3.2}>Upcoming</MenuItem>
							<MenuItem eventKey={3.3}>Top rated</MenuItem>
							<MenuItem divider />
							<MenuItem eventKey={3.3}>Recommendations</MenuItem>
						</NavDropdown>
					</ul>
					<div className="col-sm-3 col-md-3">
						<form className="navbar-form" role="search">
							<div className="input-group">
								<input type="text" className="form-control" placeholder="Search" name="q" />
								<div className="input-group-btn">
									<button className="btn btn-default" type="submit">
										<i className="glyphicon glyphicon-search" />
									</button>
								</div>
							</div>
						</form>
					</div>
					<ul className="nav navbar-nav navbar-right">
						<li>
							<a href="../navbar-static-top/">Static top</a>
						</li>
						<li><p style={{ color: 'red' }}>DESIGN IS TEMPORARY. </p></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
