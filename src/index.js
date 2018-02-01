import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { loadShows } from './actions/showActions';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import NavBar from './navbar/navbar';
import HomePage from './home/components/HomePage';
import PopularMoviesPage from './movies/components/PopularMoviesPage';
import ShowLandingPage from './shows/components/ShowLandingPage';
import ShowPageContainer from './shows/containers/ShowPageContainer';
import MoviePageContainer from './movies/containers/MoviePageContainer';
import PersonPageContainer from './people/containers/PersonPageContainer';

const store = configureStore();
store.dispatch(loadShows());


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<NavBar />
				<div className="root-body">
					<Route exact path="/" component={HomePage} />
					<Route path="/movies" component={PopularMoviesPage} />
					<Route path="/shows" component={ShowLandingPage} />
					<Route path="/show/:id" component={ShowPageContainer} />
					<Route path="/movie/:id" component={MoviePageContainer} />
					<Route path="/person/:id" component={PersonPageContainer} />
				</div>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'),
);

registerServiceWorker();
