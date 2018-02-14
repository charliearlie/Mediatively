import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { loadShows } from './actions/showActions';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavBar from './navigation/navbar';
import Footer from './navigation/footer';
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
					<div className="container">
						<Route path={`${process.env.PUBLIC_URL}/`} component={HomePage} />
						<Route path={`${process.env.PUBLIC_URL}/movies`} component={PopularMoviesPage} />
						<Route path={`${process.env.PUBLIC_URL}/shows`} component={ShowLandingPage} />
						<Route path={`${process.env.PUBLIC_URL}/show/:id`} component={ShowPageContainer} />
						<Route path={`${process.env.PUBLIC_URL}/movie/:id`} component={MoviePageContainer} />
						<Route path={`${process.env.PUBLIC_URL}/person/:id`} component={PersonPageContainer} />
					</div>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'),
);

registerServiceWorker();
