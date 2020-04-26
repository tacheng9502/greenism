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
import WhatPage from './views/What';
import WhyPage from './views/Why';
import HowPage from './views/How';
import BuildingPage from "./views/Building";

// Assets
import './assets/global.sass'

ReactDOM.render(
    <>
        <Navbar />
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/estimate" component={EstimatePage} />
                <Route exact path="/what" component={WhatPage} />
                <Route exact path="/why" component={WhyPage} />
                <Route path='/' component={BuildingPage} />
            </Switch>
        </Router>
        <Footer />
    </>,
    document.getElementById('root')
);