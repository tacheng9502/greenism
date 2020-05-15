import React from "react";

class HeroText extends React.Component {
    render() {

        const title = this.props.title;
        const subtitle = this.props.subtitle;
        const url = this.props.url;

        return (
            <section className="hero section is-primary is-vcentered">
                <div className="hero-body has-text-centered">
                    <div className="container">
                        <h1 className="title is-3 has-text-weight-bold has-text-white is-spaced">{title}</h1>
                        {this.props.isUrl &&
                            <a href={url} className="subtitle has-text-white">{subtitle}</a>
                        }
                        {this.props.isT &&
                            <p className="subtitle">{subtitle}</p>
                        }
                        {this.props.is2B &&
                            <div className="buttons is-centered">
                                <a href="/404" className="button is-info is-inverted is-outlined">
                                    <span className="icon"><i className="fas fa-calculator"></i></span>
                                    <span>Estimate Tool</span>
                                </a>
                                <a href="/plants" className="button is-info is-inverted is-outlined">
                                    <span className="icon"><i className="fas fa-search"></i></span>
                                    <span>Plant Selector</span>
                                </a>
                            </div>
                        }
                        {this.props.isSteps &&
                            <>
                                <br />
                                <ul className="steps is-centered has-content-centered is-horizontal">
                                    <li className="steps-segment">
                                        <span className="steps-marker">
                                            <span className="icon has-text-dark">
                                                <i className="fa fa-info"></i>
                                            </span>
                                        </span>
                                        <div className="steps-content">
                                            <p className="heading has-text-white">Information</p>
                                        </div>
                                    </li>
                                    <li className="steps-segment">
                                        <span className="steps-marker">
                                            <span className="icon has-text-dark">
                                                <i className="fa fa-chart-line"></i>
                                            </span>
                                        </span>
                                        <div className="steps-content">
                                            <p className="heading has-text-white">Interactive Tools</p>
                                        </div>
                                    </li>
                                    <li className="steps-segment is-active has-gaps">
                                        <span className="steps-marker">
                                            <span className="icon has-text-dark">
                                                <i className="fa fa-route"></i>
                                            </span>
                                        </span>
                                        <div className="steps-content">
                                            <p className="heading has-text-white">Self-Planting Guidlines</p>
                                        </div>
                                    </li>
                                    <li className="steps-segment">
                                        <span className="steps-marker">
                                            <span className="icon has-text-dark">
                                                <i class="fas fa-trophy"></i>
                                            </span>
                                        </span>
                                        <div className="steps-content">
                                            <p className="heading has-text-white">Achievement</p>
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