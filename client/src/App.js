import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './navbar/navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
    Route,
    Switch
  } from 'react-router-dom';

import HomePage from './home/components/HomePage';
import PopularMoviesPage from './movies/components/PopularMoviesPage';

class App extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container-fluid">
                <NavBar />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/movies" component={PopularMoviesPage} />
                    {/*<Route path="/shows" component={ShowsPage} />
                    <Route component={NotFoundPage} /> */}
                </Switch>
            </div>
        );
    }
}

export default App;
