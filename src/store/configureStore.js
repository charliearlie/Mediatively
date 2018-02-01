import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/index';

export default function configureStore() {
	return createStore(rootReducer, composeWithDevTools(applyMiddleware(promise)));
}
