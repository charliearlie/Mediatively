import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '../index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';

import NavBar from './navigation/navbar';
import Footer from './navigation/footer';
import HomePageContainer from './home/containers/HomePageContainer';
import PopularMoviesPage from './movies/components/PopularMoviesPage';
import ShowLandingPage from './shows/components/ShowLandingPage';
import ShowPageContainer from './shows/containers/ShowPageContainer';
import MoviePageContainer from './movies/containers/MoviePageContainer';
import PersonPageContainer from './people/containers/PersonPageContainer';

const store = configureStore();

const NavWithRouter = withRouter(NavBar);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<NavWithRouter />
				<div className="root-body">
					<div className="container">
						<Route exact path="/" component={HomePageContainer} />
						<Route path="/movies" component={PopularMoviesPage} />
						<Route path="/shows" component={ShowLandingPage} />
						<Route path="/show/:id" component={ShowPageContainer} />
						<Route path="/movie/:id" component={MoviePageContainer} />
						<Route path="/person/:id" component={PersonPageContainer} />
					</div>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'),
);

registerServiceWorker();
