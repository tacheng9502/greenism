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
                            <a href={url} class="subtitle has-text-white">{subtitle}</a>
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
                        {this.props.isSteps &&
                            <>
                                <br />
                                <ul class="steps is-centered has-content-centered is-horizontal">
                                    <li class="steps-segment">
                                        <a href="#" class="has-text-white">
                                            <span class="steps-marker">
                                                <span class="icon has-text-dark">
                                                    <i class="fa fa-info"></i>
                                                </span>
                                            </span>
                                            <div class="steps-content">
                                                <p class="heading">Shopping Cart</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="steps-segment">
                                        <a href="#" class="has-text-white">
                                            <span class="steps-marker">
                                                <span class="icon has-text-dark">
                                                    <i class="fa fa-user"></i>
                                                </span>
                                            </span>
                                            <div class="steps-content">
                                                <p class="heading">User Information</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="steps-segment is-active has-gaps">
                                        <span class="steps-marker">
                                            <span class="icon has-text-dark">
                                                <i class="fa fa-check"></i>
                                            </span>
                                        </span>
                                        <div class="steps-content">
                                            <p class="heading">Payment</p>
                                        </div>
                                    </li>
                                    <li class="steps-segment">
                                        <span class="steps-marker">
                                            <span class="icon has-text-link">
                                                <i class="far fa-thumbs-up"></i>
                                            </span>
                                        </span>
                                        <div class="steps-content">
                                            <p class="heading">Confirmation</p>
                                        </div>
                                    </li>
                                </ul>
                            </>
                        }
                    </div>
                </div>
            </section >
        );
    }
}

export default HeroText;