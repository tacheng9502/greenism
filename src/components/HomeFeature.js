import React from "react"

export default class HomeFeature extends React.Component {
    render() {
        return (
            <section className="hero section">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered is-6 is-variable is-multiline">
                            <div className="column has-text-centered">
                                <span className="icon is-large has-text-info">
                                    <i className="fas fa-3x fa-info is-link"></i>
                                </span>
                                <br /><br />
                                <h1 className="title is-4 is-spaced">Introduction</h1>
                                <p style={{textAlign:"justify"}}>Find out more about how climate change and our current lifestyle affects the planet, and what you could do to reduce your impact. <a href="/what">Learn more.</a></p>
                            </div>
                            <div className="column has-text-centered">
                                <span className="icon is-large has-text-warning">
                                    <i className="fas fa-3x fa-chart-bar"></i>
                                </span>
                                <br /><br />
                                <h1 className="title is-4 is-spaced">Recommendation Tools</h1>
                                <p style={{textAlign:"justify"}}>Use our Estimate Tool to find how you could green your space based on your budget, and use Plant Selector to find the bset plants.</p>
                            </div>
                            <div className="column has-text-centered">
                                <span className="icon is-large has-text-danger">
                                    <i className="fas fa-3x fa-book"></i>
                                </span>
                                <br /><br />
                                <h1 className="title is-4 is-spaced">DIY Planting Guideline</h1>
                                <p style={{textAlign:"justify"}}>Take the first step with us! Learn how to construct a green facade by yourself or try some as small as a veggie garden in your home.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}