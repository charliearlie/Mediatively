import React from 'react';
import ContentLoader from 'react-content-loader';

const CoreInfoLoader = () => (
	<ContentLoader
		height={400}
		width={1170}
		speed={2}
		primaryColor="#46494C"
		secondaryColor="#ecebeb"
	>
		<rect x="40" y="22" rx="3" ry="3" width="246.0762" height="350.6988" />
		<rect x="320" y="27" rx="3" ry="3" width="520.0414" height="28.291" />
		<rect x="324" y="72.05" rx="3" ry="3" width="353.7678" height="11.269" />
		<rect x="324" y="94.83" rx="3" ry="3" width="353.7678" height="11.269" />
		<rect x="324" y="116.83" rx="3" ry="3" width="353.7678" height="11.269" />
		<rect x="324" y="250.05" rx="3" ry="3" width="60" height="60" />
	</ContentLoader>
);

export default CoreInfoLoader;
