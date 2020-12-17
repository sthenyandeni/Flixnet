import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import logo from '../../flixnet_full.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './navbar.css';
import Home from '../home';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/browse">
                        <img src={logo} width="90" alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <div className="navbar-nav">
                            <Router>
                                <Link to='/browse' className="navbar-link">Home</Link>
                                <Link to="/tvshows" className="navbar-link">TV Shows</Link>
                                <Link to="/movies" className="navbar-link">Movies</Link>
                                <Link to="/new" className="navbar-link">New & Popular</Link>
                                <Link to="/list" className="navbar-link">My List</Link>
                                <Link to="/again" className="navbar-link">Watch Again</Link>
                                <Switch>
                                    <Route path="/browse" component={Home} />
                                </Switch>
                            </Router>
                            
                        </div>
                        <div className="navbar-nav ml-auto">
                            <i class="bi bi-search text-white mr-4"></i>
                            <i class="bi bi-gift text-white mr-4"></i>
                            <i class="bi bi-bell-fill text-white mr-3"></i>
                        </div>
                    </div> 
                </div>
            </nav>
        );
    }
}

export default Navbar;