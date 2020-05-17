import React from "react";

function JourneyCard({ title, title1, img1, img2, img3 }) {
    return (
        <section class="section has-background-white-ter">
            <div class="hero-body">
                <div class="container">
                    <br />
                    <h1 class="title is-4 has-text-weight-bold has-text-centered is-spaced">{title}</h1>
                    <br />
                    <div class="columns">
                        <div class="column">
                            <div class="card">
                                <header class="card-header has-background-primary">
                                    <p class="card-header-title">
                                        <strong class="has-text-white">Estimate Tool</strong>
                                    </p>
                                </header>
                                <div class="card-content">
                                    <div class="content">
                                        Find out what kind of green space suits your home best, a cost-benefit analysis if you want to invest in a green roof or green facade and experts we recommend to help construct beautiful green spaces.
                                    <br /><br />
                                        <a class="button is-link is-pulled-right" href="/estimate">
                                            <span class="icon">
                                                <i class="fas fa-calculator"></i>
                                            </span>
                                            <span>Go calculate</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <header class="card-header has-background-primary">
                                    <p class="card-header-title">
                                        <strong class="has-text-white">Plant Selector Tool</strong>
                                    </p>
                                </header>
                                <div class="card-content">
                                    <div class="content">
                                    Find out plants you can plant in your garden based on your preferences and other ecological factors, such as amount of sunlight and rainfall.
                                    <br /><br />
                                        <a class="button is-link is-pulled-right" href="/plants">
                                            <span class="icon">
                                                <i class="fas fa-search"></i>
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
            <div class="hero-body">
                <div class="container">
                    <br />
                    <h1 class="title is-4 has-text-weight-bold has-text-centered is-spaced">{title1}</h1>
                    <br />
                    <div class="columns">
                        <div class="column">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img src={img1} alt="Placeholder" />
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="content">
                                        <strong>Local Experts</strong><br /><br />
                                        <p>Contact local experts to find out more if you are interested to construct green roofs or facades in your home.</p>
                                        <br />
                                        <a class="button is-fullwidth is-primary" href="/guidelines">
                                            Contact Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img src={img2} alt="Placeholder" />
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="content">
                                        <strong>DIY - Green Facade</strong><br /><br />
                                        <p>Build a green facade by yourself in your home using our reliable and simple steps.</p>
                                        <br />
                                        <a class="button is-fullwidth is-primary" href="/potential">
                                            Learn More
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img src={img3} alt="Placeholder" />
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="content">
                                        <strong>DIY - Home Garden</strong><br /><br />
                                        <p>Grow a veggie garden or Indoor plants to take that first (big) step to cool and green your home.</p>
                                        <br />
                                        <a class="button is-fullwidth is-primary" href="/business">
                                            Learn More
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

export default JourneyCard;
