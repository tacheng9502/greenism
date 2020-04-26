import React from "react";

class HeroText extends React.Component {
    render() {

        const title = this.props.title;
        const subtitle = this.props.subtitle;

        return (
            <section class="hero section is-primary is-vcentered">
                <div class="hero-body has-text-centered">
                    <div class="container">
                        <h1 class="title is-3 has-text-weight-bold has-text-white is-spaced">{title}</h1>
                        <p class="subtitle">{subtitle}</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default HeroText;