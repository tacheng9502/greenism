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
                                <p>We offer a wealth of resources regarding the types of green infrastructure, its benefits, how easy it is to care of the plants you grow, how to maintain them and loads more!</p>
                            </div>
                            <div class="column has-text-centered">
                                <span class="icon is-large has-text-warning">
                                    <i class="fas fa-3x fa-chart-line"></i>
                                </span>
                                <br/><br/>
                                <h1 class="title is-4 is-spaced">Interactive Tools</h1>
                                <p>Want to know more about the type of plants you can grow in your green garden? Or do you want to know what type of green infrastructure is best suited for your house? We can do both!</p>
                            </div>
                            <div class="column has-text-centered">
                                <span class="icon is-large has-text-danger">
                                    <i class="fas fa-3x fa-route"></i>
                                </span>
                                <br/><br/>
                                <h1 class="title is-4 is-spaced">Self-Planting Guideline</h1>
                                <p>Do you own a house in the city? Or are you the owner of a local business wanting to do his bit for the planet? We've got content based on what profile suits you best.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Feature;