// Modules
import React from "react";

// Assets
import img_localExperts from "../assets/img/localExperts.jpg";
import img_greenFacades from "../assets/img/greenFacades.jpg";
import img_homeGarden from "../assets/img/homeGarden.jpg";

function HomeFeatureCard() {
    return (
        <section className="section has-background-white-ter">
            <div className="hero-body">
                <div className="container">
                    <br /><h1 className="title is-4 has-text-centered is-spaced">Recommendation Tools</h1><br />
                    <div className="columns">
                        <div className="column">
                            <div className="card">
                                <header className="card-header has-background-primary">
                                    <p className="card-header-title">
                                        <strong className="has-text-white">Estimate Tool</strong>
                                    </p>
                                </header>
                                <div className="card-content">
                                    <div className="content">
                                        <p style={{textAlign:"justify"}}>Find out what kind of green space suits your home best, a cost-benefit analysis
                                        if you want to invest in a green roof or facade and experts we recommend
                                        to help construct beautiful green spaces.</p><br />
                                        <a className="button is-link is-pulled-right" href="/estimate">
                                            <span className="icon">
                                                <i className="fas fa-calculator"></i>
                                            </span>
                                            <span>Go calculate</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <header className="card-header has-background-primary">
                                    <p className="card-header-title">
                                        <strong className="has-text-white">Plant Selector</strong>
                                    </p>
                                </header>
                                <div className="card-content">
                                    <div className="content">
                                        <p style={{textAlign:"justify"}}>Find out plants you would like to plant in your garden based on your preferences
                                            and other ecological factors, such as amount of sunlight and rainfall.</p><br />
                                        <a className="button is-link is-pulled-right" href="/plants">
                                            <span className="icon">
                                                <i className="fas fa-search"></i>
                                            </span>
                                            <span>Go search</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-body">
                <div className="container">
                    <br />
                    <h1 className="title is-4 has-text-centered is-spaced">DIY Planting Guideline & Local Experts</h1>
                    <br />
                    <div className="columns">
                        <div className="column">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src={img_greenFacades} alt="Green Facades" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <strong className="is-size-5">DIY - Green Facade</strong><br /><br />
                                        <p style={{textAlign:"justify"}}>Build a green facade by yourself in your home following our reliable and simple guidelines.</p>
                                        <br />
                                        <a className="button is-fullwidth is-primary" href="/siteAnalysis">
                                            Learn More
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src={img_homeGarden} alt="Home Garden" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <strong className="is-size-5">DIY - Home Garden</strong><br /><br />
                                        <p style={{textAlign:"justify"}}>Grow a veggie garden or Indoor plants to take that first (big) step to cool and green your home.</p>
                                        <br />
                                        <a className="button is-fullwidth is-primary" href="/diy">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src={img_localExperts} alt="Local Experts" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <strong className="is-size-5">Local Experts</strong><br /><br />
                                        <p style={{textAlign:"justify"}}>Contact local experts to find out more if you are interested to construct green roofs or facades in your home.</p>
                                        <br />
                                        <a className="button is-fullwidth is-primary" href="/finding">
                                            Contact Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeFeatureCard;