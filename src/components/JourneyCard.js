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
                                        Find out more about when an investment in green infrastructure could turn into savings and get our recommendations about what kind of infrastructure you could construct in your building.
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
                                        <strong class="has-text-white">Find-the-right-plant Tool</strong>
                                    </p>
                                </header>
                                <div class="card-content">
                                    <div class="content">
                                        Filter out plants based on ecological factors like amount of sunlight, average temperature, amount of rainfall etc and also check if plants you love to be around can be included in your green garden.
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
                                        <strong>House Owners</strong><br /><br />
                                        <p>Do you own a home in the city and wonder how you and your family could help climate change? Interested to find out if green infrastructure can be constructed in a space of your choice?</p>
                                        <br />
                                        <a class="button is-fullwidth is-primary" href="/guidelines">
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
                                        <img src={img2} alt="Placeholder" />
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="content">
                                        <strong>Potential House Buyers</strong><br /><br />
                                        <p>Thinking about building or buying a house in an urban area? Wondering if you could implement or grow a green space in the home you are building? Click here to find out!</p>
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
                                        <strong>Local Business Owners</strong><br /><br />
                                        <p>Do you own a local business in an urban area and want to know about how constructing some type of green infrastructure in your building or space could benefit you and your business?</p>
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
