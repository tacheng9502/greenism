// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

// Views
import HomePage from './views/Home';
import EstimatePage from './views/Estimate';
import WhatPage from './views/What' ;
import WhyPage from './views/Why' ;
import HowPage from './views/How' ;

// Assets
import './assets/global.sass'

ReactDOM.render(
    <React.StrictMode>
        <Navbar />
        <Router>
            <Switch>
                <Route exact path="/estimate" component={EstimatePage} />
                <Route exact path="/what" component={WhatPage} />
                <Route exact path="/why" component={WhyPage} />
                <Route exact path="/how" component={HowPage} />
                <Route path='/' component={HomePage} />
            </Switch>
        </Router>
        <Footer />
    </React.StrictMode>,
    document.getElementById('root')
);