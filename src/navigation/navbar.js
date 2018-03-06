import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, NavDropdown, Nav, NavItem } from 'react-bootstrap';
import { Input } from 'antd';

const { Search } = Input;

const NavBar = (props) => {
	const { push } = props.history;
	return (
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
							<NavItem onClick={() => push('/movies')}>Popular</NavItem>
							<NavItem eventKey={3.2}>Upcoming</NavItem>
							<NavItem eventKey={3.3}>Top rated</NavItem>
							<NavItem eventKey={3.3}>Top 100</NavItem>
						</NavDropdown>
						<NavDropdown eventKey={3} title="Shows" id="basic-nav-dropdown">
							<NavItem onClick={() => push('/shows')}>Popular</NavItem>
							<NavItem eventKey={3.2}>Upcoming</NavItem>
							<NavItem eventKey={3.3}>Top rated</NavItem>
							<NavItem eventKey={3.3}>Recommendations</NavItem>
						</NavDropdown>
					</Nav>
				</Navbar.Form>
				<Navbar.Form pullRight>
					<Nav>
						<NavItem>
							<Search
								placeholder="Search Mediatively..."
								onSearch={value => console.log(value)}
								enterButton
							/>
						</NavItem>
					</Nav>
				</Navbar.Form>
			</Navbar.Collapse>
		</Navbar>
	);
};

NavBar.propTypes = {
	history: PropTypes.objectOf().isRequired,
};

export default NavBar;
