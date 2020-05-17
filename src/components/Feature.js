import React from "react"

class Feature extends React.Component {
    render() {
        return (
            <section class="hero section is-block is-relative">
                <div class="hero-body">
                    <div class="container">
                        <div class="columns is-centered is-4 is-variable is-multiline">
                            <div class="column has-text-centered">
                                <span class="icon is-large has-text-info">
                                    <i class="fas fa-3x fa-info is-link"></i>
                                </span>
                                <br/><br/>
                                <h1 class="title is-4 is-spaced">Information</h1>
                                <p>Find out more about how climate change and our current lifestyle affects the planet, and what you could do to reduce your impact.</p>
                            </div>
                            <div class="column has-text-centered">
                                <span class="icon is-large has-text-warning">
                                    <i class="fas fa-3x fa-chart-bar"></i>
                                </span>
                                <br/><br/>
                                <h1 class="title is-4 is-spaced">Interactive Tools</h1>
                                <p>Use our estimate tool to find how you could green your space based on your budget, and use plant-selector tool to find the bset plants.</p>
                            </div>
                            <div class="column has-text-centered">
                                <span class="icon is-large has-text-danger">
                                    <i class="fas fa-3x fa-book"></i>
                                </span>
                                <br/><br/>
                                <h1 class="title is-4 is-spaced">DIY Planting Guideline</h1>
                                <p>Take the first step with us! - Learn how to construct a green facade by yourself or something as small as a veggie garden in your home.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Feature;