// Modules
import React from "react";

// Assets
import img_greenWall from "../assets/img/greenWall.png"

export default class Estimate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            question: "How many square meters is your roof?",
            m_roof: 0,
            m_wall: 0,
            budget: 0,
            style_left: { float: "right", marginRight: "0.75em", display: "none" },
            style_right: { float: "right", marginLeft: "0.75em", display: "flex" },
            style_last: { float: "right", marginLeft: "0.75em", display: "none" },
            style_1: "steps-segment is-active",
            style_2: "steps-segment",
            style_3: "steps-segment",
        }

        this.nextStep = this.nextStep.bind(this);
        this.previousStep = this.previousStep.bind(this);
    }

    nextStep() {
        const nStep = this.state.step + 1;
        const nStyle_1 = "steps-segment"
        let nStyle_2 = "steps-segment"
        let nStyle_3 = "steps-segment"
        let nQuestion = ""
        const nStyle_left = { float: "right", marginRight: "0.75em", display: "flex" }
        let nStyle_right = { float: "right", marginLeft: "0.75em", display: "flex" }
        let nStyle_last = { float: "right", marginLeft: "0.75em", display: "none" }

        if (nStep === 2) {
            nStyle_2 = "steps-segment is-active"
            nQuestion = "How many square meters is your wall?"
        }

        if (nStep === 3) {
            nStyle_3 = "steps-segment is-active"
            nQuestion = "What's your budget for initial cost?"
            nStyle_right = { float: "right", marginLeft: "0.75em", display: "none" }
            nStyle_last = { float: "right", marginLeft: "0.75em", display: "flex" }
        }

        this.setState({
            step: nStep,
            style_1: nStyle_1,
            style_2: nStyle_2,
            style_3: nStyle_3,
            question: nQuestion,
            style_left: nStyle_left,
            style_right: nStyle_right,
            style_last: nStyle_last
        });
    }

    previousStep() {
        const nStep = this.state.step - 1;
        let nStyle_1 = "steps-segment"
        let nStyle_2 = "steps-segment"
        const nStyle_3 = "steps-segment"
        let nQuestion = ""
        let nStyle_left = { float: "right", marginRight: "0.75em", display: "flex" }
        const nStyle_right = { float: "right", marginLeft: "0.75em", display: "flex" }
        const nStyle_last = { float: "right", marginLeft: "0.75em", display: "none" }

        if (nStep === 1) {
            nStyle_1 = "steps-segment is-active"
            nQuestion = "How many square meters is your roof?"
            nStyle_left = { float: "right", marginRight: "0.75em", display: "none" }
        }

        if (nStep === 2) {
            nStyle_2 = "steps-segment is-active"
            nQuestion = "How many square meters is your wall?"
        }

        this.setState({
            step: nStep,
            style_1: nStyle_1,
            style_2: nStyle_2,
            style_3: nStyle_3,
            question: nQuestion,
            style_left: nStyle_left,
            style_right: nStyle_right,
            style_last: nStyle_last
        });
    }

    render() {
        return (
            <section className="hero is-primary is-medium" style={{ backgroundImage: `url(${img_greenWall})` }}>
                <div className="hero-body">
                    <div className="container">
                        <ul className="steps is-centered has-content-centered is-horizontal">
                            <li className={this.state.style_1} style={{ transition: "all 2s" }}>
                                <span class="steps-marker">1</span>
                            </li>
                            <li className={this.state.style_2} style={{ transition: "all 2s" }}>
                                <span class="steps-marker">2</span>
                            </li>
                            <li className={this.state.style_3} style={{ transition: "all 2s" }}>
                                <span class="steps-marker">3</span>
                            </li>
                            <li className="steps-segment">
                                <span className="steps-marker">
                                    <span className="icon has-text-dark">
                                        <i class="fas fa-check"></i>
                                    </span>
                                </span>
                            </li>
                        </ul>
                        <br /><br />
                        <div className="card">
                            <header className="card-header has-background-primary">
                                <p className="card-header-title">
                                    <span class="icon has-text-white">
                                        <i class="fas fa-question-circle"></i>
                                    </span>&nbsp;&nbsp;
                                    <strong className="has-text-white">{this.state.question}</strong>
                                </p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    <div className="control field">
                                        <input class="input" type="number" id="quantity" name="quantity" min="1" max="5" placeholder="Quantity" />
                                    </div>
                                    <br /><br />
                                    &nbsp;
                                    <button class="button is-link" onClick={this.nextStep} style={this.state.style_right}>
                                        <span>Next</span>
                                        <span class="icon">
                                            <i class="fas fa-arrow-circle-right"></i>
                                        </span>
                                    </button>
                                    <button class="button is-warning" style={this.state.style_last}>
                                        <span class="icon">
                                            <i class="fas fa-calculator"></i>
                                        </span>
                                        <span>Result</span>
                                    </button>
                                    <button class="button is-danger" onClick={this.previousStep} style={this.state.style_left}>
                                        <span class="icon">
                                            <i class="fas fa-arrow-circle-left"></i>
                                        </span>
                                        <span>Previous</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}