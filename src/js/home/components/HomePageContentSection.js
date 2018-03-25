import React from 'react';
import { Tabs } from 'antd';
import PropTypes from 'prop-types';
import HomePageCollection from './HomePageCollection';

const HomePageContentSection = (props) => {
	const {
		header,
		type,
		sections,
		width,
		tabs,
	} = props;
	const { TabPane } = Tabs;
	return (
		<div className="col-xs-12 col-sm-9 HomePage__content" style={{ textAlign: 'left', paddingLeft: '-16px' }}>
			<h2>{header}</h2>
			<Tabs defaultActiveKey="0" onChange={this.onTabChange}>
				{sections.map((section, i) => (
					<TabPane
						tab={tabs[i]}
						key={i} // eslint-disable-line react/no-array-index-key
					>
						<HomePageCollection type={type} collection={section} width={width} />
					</TabPane>
				))}
			</Tabs>
		</div>
	);
};

HomePageContentSection.propTypes = {
	header: PropTypes.string.isRequired,
	sections: PropTypes.arrayOf(PropTypes.object).isRequired,
	width: PropTypes.number.isRequired,
	tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
	type: PropTypes.string,
};

HomePageContentSection.defaultProps = {
	type: 'movie',
};

export default HomePageContentSection;
