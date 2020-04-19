import React from "react";

class HeroImageLeft extends React.Component {

    render() {
        let title = this.props.title;
        let subtitle = this.props.subtitle;
        let rows = this.props.rows;

        return (
            <section class="hero section is-block is-relative">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title is-4 has-text-weight-bold has-text-centered is-spaced">{title}</h1>
                        <p class="subtitle is-6 has-text-centered">{subtitle}</p>
                    </div>
                </div>
                <div class="hero-body">
                    <div class="container">
                        {rows.map((item, key) =>
                            <div key={key} class="columns is-vcentered is-8 has-text-centered-mobile">
                                <div class="column">
                                    <figure class="image" style={{ width: "250px", margin: "30px auto" }}>
                                        {item.img}
                                    </figure>
                                </div>
                                <div class="column is-two-thirds">
                                    <h3 class="title has-text-weight-bold is-5">{item.title}</h3>
                                    <p>{item.subtitle}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    };
}

export default HeroImageLeft;