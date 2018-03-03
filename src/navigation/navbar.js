import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavDropdown, Nav, MenuItem, FormGroup } from 'react-bootstrap';
import { Input } from 'antd';

const { Search } = Input;

const NavBar = () => (
	<Navbar fixedTop>
		<Navbar.Header>
			<Navbar.Brand>
				<a href="/">Mediatively</a>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Navbar.Form pullLeft>
				<Nav>
					<NavDropdown eventKey={3} title="Movies" id="basic-nav-dropdown">
						<MenuItem><Link to="/movies">Popular</Link></MenuItem>
						<MenuItem eventKey={3.2}>Upcoming</MenuItem>
						<MenuItem eventKey={3.3}>Top rated</MenuItem>
						<MenuItem divider />
						<MenuItem eventKey={3.3}>Top 100</MenuItem>
					</NavDropdown>
					<NavDropdown eventKey={3} title="Shows" id="basic-nav-dropdown">
						<MenuItem><Link to="/shows">Popular</Link></MenuItem>
						<MenuItem eventKey={3.2}>Upcoming</MenuItem>
						<MenuItem eventKey={3.3}>Top rated</MenuItem>
						<MenuItem divider />
						<MenuItem eventKey={3.3}>Recommendations</MenuItem>
					</NavDropdown>
				</Nav>
			</Navbar.Form>
			<Navbar.Form pullRight>
				<Nav>
					<FormGroup>
						<Search
							placeholder="Search Mediatively..."
							onSearch={value => console.log(value)}
							enterButton
						/>
					</FormGroup>{' '}
				</Nav>
			</Navbar.Form>
		</Navbar.Collapse>
	</Navbar>
);

export default NavBar;
