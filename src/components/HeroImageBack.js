import React from "react";

class HeroImageBack extends React.Component {
    render() {
        const backgroundImageStyle = {
            backgroundImage: 'url(' + this.props.img + ')',
            opacity: this.props.opacity,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        }

        const title = this.props.title
        const subtitle = this.props.subtitle

        return (
            <section class="hero section is-block is-relative is-vcentered has-text-centered is-medium" style={backgroundImageStyle} >
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title is-3 has-text-weight-bold is-spaced">{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                </div>
            </section >
        );
    }
}

export default HeroImageBack;