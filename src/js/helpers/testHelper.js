import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';

/**
 * When testing components wrapped with React Router's Link,
 * we must mock the router's current context.
 * These helper functions do that.
 */

const router = {
	history: new BrowserRouter().history,
	route: {
		location: {},
		match: {},
	},
};

const createContext = () => ({
	context: { router },
	childContextTypes: { router: PropTypes.shape({}) },
});

function mountWrap(node) {
	return mount(node, createContext());
}

export default mountWrap;
