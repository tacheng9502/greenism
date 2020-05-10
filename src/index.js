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
import WhatPage from './views/What';
import WhyPage from './views/Why';
import EstimatePage from './views/Estimate';
import PlantsPage from './views/Plants';
import PlantDetailPage from "./views/PlantDetail"
import GuidlinesPage from './views/Guidelines';
import EvaluatingPage from "./views/Evaluating";
import ComparingPage from "./views/Comparing";
import FindingPage from "./views/Finding";
import CarePage from "./views/Care";
import BuildingPage from "./views/Building";


// Assets
import './assets/global.sass'

ReactDOM.render(
    <>
        <Navbar />
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/what" component={WhatPage} />
                <Route exact path="/why" component={WhyPage} />
                <Route exact path="/estimate" component={EstimatePage} />
                <Route exact path="/plants" component={PlantsPage} />
                <Route path="/plantDetail/:plantId" component={PlantDetailPage} />
                <Route exact path="/guidelines" component={GuidlinesPage} />
                <Route exact path="/evaluating" component={EvaluatingPage} />
                <Route exact path="/comparing" component={ComparingPage} />
                <Route exact path="/finding" component={FindingPage} />
                <Route exact path="/care" component={CarePage} />
                <Route path='/' component={BuildingPage} />
            </Switch>
        </Router>
        <Footer />
    </>,
    document.getElementById('root')
);