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
                                <p>We provide a lot of Information We provide a lot of Information We provide a lot of Information We provide a lot of Information We provide a lot of Information a lot of information</p>
                            </div>
                            <div class="column has-text-centered">
                                <span class="icon is-large has-text-warning">
                                    <i class="fas fa-3x fa-chart-line"></i>
                                </span>
                                <br/><br/>
                                <h1 class="title is-4 is-spaced">Interactive tools</h1>
                                <p>We have two interactive tools We have two interactive tools We have two interactive tools We have two interactive tools We have two interactive tools We have two interactive tools</p>
                            </div>
                            <div class="column has-text-centered">
                                <span class="icon is-large has-text-danger">
                                    <i class="fas fa-3x fa-route"></i>
                                </span>
                                <br/><br/>
                                <h1 class="title is-4 is-spaced">Guidlines</h1>
                                <p>We have three different user journeys We have three different user journeys We have three different user journeys We have three different user journeys We have three different</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Feature;