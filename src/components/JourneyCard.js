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
                                <div class="card-content has-background-white-ter">
                                    <div class="content">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
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
                                        <strong class="has-text-white">Plant Selector</strong>
                                    </p>
                                </header>
                                <div class="card-content has-background-white-ter">
                                    <div class="content">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                    <br /><br />
                                        <button class="button is-link is-pulled-right">
                                            <span class="icon">
                                                <i class="fas fa-search"></i>
                                            </span>
                                            <span>Go search</span>
                                        </button>
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
                            <div class="card has-background-white-ter">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img src={img1} alt="Placeholder" />
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="content">
                                        <strong>House Owners</strong><br /><br />
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                        <br />
                                        <button class="button is-fullwidth is-primary">
                                            Learn More
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card has-background-white-ter">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img src={img2} alt="Placeholder" />
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="content">
                                        <strong>Potential Buyers</strong><br /><br />
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                        <br />
                                        <button class="button is-fullwidth is-primary">
                                            Learn More
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card has-background-white-ter">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img src={img3} alt="Placeholder" />
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="content">
                                        <strong>Building Owners</strong><br /><br />
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                        <br />
                                        <button class="button is-fullwidth is-primary">
                                            Learn More
                                    </button>
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
