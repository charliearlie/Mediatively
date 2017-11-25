import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import { loadShows } from './actions/showActions';
import {Provider} from 'react-redux';

const store = configureStore();
store.dispatch(loadShows());


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));

registerServiceWorker();
