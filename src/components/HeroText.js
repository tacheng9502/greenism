import React from "react";

class HeroText extends React.Component {
    render() {

        const title = this.props.title;
        const subtitle = this.props.subtitle;
        const url = this.props.url;

        return (
            <section class="hero section is-primary is-vcentered">
                <div class="hero-body has-text-centered">
                    <div class="container">
                        <h1 class="title is-3 has-text-weight-bold has-text-white is-spaced">{title}</h1>
                        {this.props.isUrl &&
                            <a href={url} class="subtitle">{subtitle}</a>
                        }
                        {this.props.isT &&
                            <p class="subtitle">{subtitle}</p>
                        }
                        {this.props.is2B &&
                            <div class="buttons is-centered">
                                <a href="/estimate" class="button is-info is-inverted is-outlined">
                                    <span class="icon"><i class="fas fa-calculator"></i></span>
                                    <span>Estimate Tool</span>
                                </a>
                                <a href="/search" class="button is-info is-inverted is-outlined">
                                    <span class="icon"><i class="fas fa-search"></i></span>
                                    <span>Plant Selector</span>
                                </a>
                            </div>
                        }

                    </div>
                </div>
            </section >
        );
    }
}

export default HeroText;