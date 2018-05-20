import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import PropTypes from 'prop-types';
import HomePageCollection from './HomePageCollection';

const HomePageContentSection = (props) => {
	const {
		header,
		type,
		sections,
		tabs,
	} = props;

	return (
		<div className="col-xs-12 HomePage__content" style={{ textAlign: 'left', paddingLeft: '-16px' }}>
			<h2>{header}</h2>
			<Tabs defaultActiveKey={0} id="uncontrolled-tab-example">
				{sections.map((section, i) => (
					<Tab
						title={tabs[i]}
						eventKey={i}
					>
						<HomePageCollection type={type} collection={section} />
					</Tab>
				))}
			</Tabs>
		</div>
	);
};

HomePageContentSection.propTypes = {
	header: PropTypes.string.isRequired,
	sections: PropTypes.arrayOf(PropTypes.object).isRequired,
	tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
	type: PropTypes.string,
};

HomePageContentSection.defaultProps = {
	type: 'movie',
};

export default HomePageContentSection;
