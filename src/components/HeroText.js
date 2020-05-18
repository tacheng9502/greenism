import React from "react";

class HeroText extends React.Component {
    render() {

        const title = this.props.title;
        const subtitle = this.props.subtitle;
        const url = this.props.url;

        return (
            <section id="feature" className="hero is-primary is-vcentered">
                <div className="hero-body has-text-centered">
                    <div className="container">
                        <h1 className="title is-3 has-text-white is-spaced">{title}</h1>
                        {this.props.isUrl &&
                            <a href={url} className="subtitle has-text-white">{subtitle}</a>
                        }
                        {this.props.isT &&
                            <p className="subtitle">{subtitle}</p>
                        }
                        {this.props.is2B &&
                            <div className="buttons is-centered">
                                <a href="/estimate" className="button is-info is-inverted is-outlined">
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
                                            <span className="icon has-text-primary">
                                                <i className="fa fa-info"></i>
                                            </span>
                                        </span>
                                        <div className="steps-content">
                                            <p className="heading has-text-white">Introduction</p>
                                        </div>
                                    </li>
                                    <li className="steps-segment">
                                        <span className="steps-marker">
                                            <span className="icon has-text-primary">
                                                <i class="fas fa-chart-bar"></i>
                                            </span>
                                        </span>
                                        <div className="steps-content">
                                            <p className="heading has-text-white">Recommendation Tools</p>
                                        </div>
                                    </li>
                                    <li className="steps-segment">
                                        <span className="steps-marker">
                                            <span className="icon has-text-primary">
                                                <i class="fas fa-book"></i>
                                            </span>
                                        </span>
                                        <div className="steps-content">
                                            <p className="heading has-text-white">DIY Planting Guideline</p>
                                        </div>
                                    </li>
                                    <li className="steps-segment">
                                        <span className="steps-marker">
                                            <span className="icon has-text-primary">
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