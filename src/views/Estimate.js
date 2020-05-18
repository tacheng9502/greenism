// Modules
import React from "react";

// Assets
import { Line } from "react-chartjs-2";
import img_estiamte from "../assets/img/estimate.png"

const questions = ["Q1 How many square meters is your roof?",
    "Q2 How many square meters is your wall?",
    "Q3 What's your budget for initial cost?",
    "Q4 What is the average monthly electricity bill for your house?"]

export default class Estimate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            question: questions[0],
            roof: 0,
            cost_roof: [],
            benefit_roof: [],
            cost_wall: [],
            benefit_wall: [],
            wall: 0,
            budget: 0,
            bill: 0,
            buttonLeft: { float: "right", marginRight: "0.75em", display: "none" },
            buttonRight: { float: "right", marginLeft: "0.75em", display: "flex" },
            buttonLast: { float: "right", marginLeft: "0.75em", display: "none" },
            stepOne: "steps-segment is-active",
            stepTwo: "steps-segment",
            stepThree: "steps-segment",
            stepFour: "steps-segment",
            survey: { display: "flex", backgroundImage: `url(${img_estiamte})`, backgroundPosition: "center" },
            result: { display: "none" },
            option: "3",
            recommend: "3",
            width_opOne: "column",
            width_opTwo: "column",
            width_opThree: "column",
            title: "",
            data: {}
        }

        this.nextStep = this.nextStep.bind(this);
        this.previousStep = this.previousStep.bind(this);
        this.showResult = this.showResult.bind(this);
        this.selectOption = this.selectOption.bind(this);
        this.getValue = this.getValue.bind(this);
    }

    nextStep(e) {
        const newStep = this.state.step + 1;
        if (newStep > 4) {
            this.showResult()
        } else {
            const style_stepOne = "steps-segment"
            let style_stepTwo = "steps-segment"
            let style_stepThree = "steps-segment"
            let style_stepFour = "steps-segment"
            let newQuestion = ""
            const styleLeft = { float: "right", marginRight: "0.75em", display: "flex" }
            let styleRight = { float: "right", marginLeft: "0.75em", display: "flex" }
            let styleLast = { float: "right", marginLeft: "0.75em", display: "none" }

            if (newStep === 2) {
                style_stepTwo = "steps-segment is-active"
                newQuestion = questions[1]
            }

            if (newStep === 3) {
                style_stepThree = "steps-segment is-active"
                newQuestion = questions[2]
            }

            if (newStep === 4) {
                style_stepFour = "steps-segment is-active"
                newQuestion = questions[3]
                styleRight = { float: "right", marginLeft: "0.75em", display: "none" }
                styleLast = { float: "right", marginLeft: "0.75em", display: "flex" }
            }

            this.setState({
                step: newStep,
                stepOne: style_stepOne,
                stepTwo: style_stepTwo,
                stepThree: style_stepThree,
                stepFour: style_stepFour,
                question: newQuestion,
                buttonLeft: styleLeft,
                buttonRight: styleRight,
                buttonLast: styleLast
            });
        }
        e.preventDefault();
    }

    previousStep() {
        const newStep = this.state.step - 1;
        let style_stepOne = "steps-segment"
        let style_stepTwo = "steps-segment"
        let style_stepThree = "steps-segment"
        const style_stepFour = "steps-segment"
        let newQuestion = ""
        let styleLeft = { float: "right", marginRight: "0.75em", display: "flex" }
        const styleRight = { float: "right", marginLeft: "0.75em", display: "flex" }
        const styleLast = { float: "right", marginLeft: "0.75em", display: "none" }

        if (newStep === 1) {
            style_stepOne = "steps-segment is-active"
            newQuestion = questions[0]
            styleLeft = { float: "right", marginRight: "0.75em", display: "none" }
        }

        if (newStep === 2) {
            style_stepTwo = "steps-segment is-active"
            newQuestion = questions[1]
        }

        if (newStep === 3) {
            style_stepThree = "steps-segment is-active"
            newQuestion = questions[2]
        }

        this.setState({
            step: newStep,
            stepOne: style_stepOne,
            stepTwo: style_stepTwo,
            stepThree: style_stepThree,
            stepFour: style_stepFour,
            question: newQuestion,
            buttonLeft: styleLeft,
            buttonRight: styleRight,
            buttonLast: styleLast
        });
    }

    getValue(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    showResult() {
        let initial_facade = 399.1 * this.state.wall
        let cost_facade = [initial_facade]
        let benefit_facade = [0]
        let initial_roof = 568.28 * this.state.roof
        let cost_roof = [initial_roof]
        let benefit_roof = [0]
        let recommendOP = "2"
        let chartTitle = ""
        let chartData = {}

        for (let i = 1; i <= 50; i++) {
            if (i < 5) {
                cost_facade.push(cost_facade[i - 1] + 5.8 * this.state.wall)
                benefit_facade.push(0)
                cost_roof.push(cost_roof[i - 1] + 10 * this.state.roof)
                benefit_roof.push(benefit_roof[i - 1] + 21 * this.state.roof)
            } else {
                cost_facade.push(cost_facade[i - 1] + 28.7 * this.state.wall)
                benefit_facade.push(benefit_facade[i - 1] + 136.9 * this.state.wall)
                cost_roof.push(cost_roof[i - 1] + 10 * this.state.roof)
                benefit_roof.push(benefit_roof[i - 1] + 21 * this.state.roof)
            }
        }

        //Find recommend

        if (recommendOP === "1") {
            chartTitle = "Green Roof"
            chartData = {
                labels: [...Array(51).keys()],
                datasets: [
                    {
                        label: "Annual Cost (AUD)",
                        data: cost_roof,
                        pointBackgroundColor: 'rgba(255, 99, 132, 0.6)',
                        borderColor: 'rgba(255, 99, 132, 0.6)',
                        pointHoverBackgroundColor: 'rgba(26, 147, 111, 0.6)',
                        fill: false
                    },
                    {
                        label: "Annual Benefit (AUD)",
                        data: benefit_roof,
                        pointBackgroundColor: 'rgba(26, 147, 111, 0.6)',
                        borderColor: 'rgba(26, 147, 111, 0.6)',
                        pointHoverBackgroundColor: 'rgba(255, 99, 132, 0.6)',
                        fill: false
                    }
                ]
            }
        }

        if (recommendOP === "2") {
            chartTitle = "Green Facades"
            chartData = {
                labels: [...Array(51).keys()],
                datasets: [
                    {
                        label: "Annual Cost (AUD)",
                        data: cost_facade,
                        pointBackgroundColor: 'rgba(255, 99, 132, 0.6)',
                        borderColor: 'rgba(255, 99, 132, 0.6)',
                        pointHoverBackgroundColor: 'rgba(26, 147, 111, 0.6)',
                        fill: false
                    },
                    {
                        label: "Annual Benefit (AUD)",
                        data: benefit_facade,
                        pointBackgroundColor: 'rgba(26, 147, 111, 0.6)',
                        borderColor: 'rgba(26, 147, 111, 0.6)',
                        pointHoverBackgroundColor: 'rgba(255, 99, 132, 0.6)',
                        fill: false
                    }
                ]
            }
        }

        this.setState({
            survey: { display: "none" },
            result: { display: "flex" },
            recommend: recommendOP,
            cost_wall: cost_facade,
            benefit_wall: benefit_facade,
            cost_roof: cost_roof,
            benefit_roof: benefit_roof,
            title: chartTitle,
            data: chartData,
        })
    }

    selectOption(event) {
        let chartTitle = ""
        let chartData = {}

        if (event.target.getAttribute('name') === "1") {
            console.log("111")
            chartTitle = "Green Roof"
            chartData = {
                labels: [...Array(51).keys()],
                datasets: [
                    {
                        label: "Annual Cost (AUD) - Green Roof",
                        data: this.state.cost_roof,
                        pointBackgroundColor: 'rgba(255, 99, 132, 0.6)',
                        borderColor: 'rgba(255, 99, 132, 0.6)',
                        pointHoverBackgroundColor: 'rgba(26, 147, 111, 0.6)',
                        fill: false
                    },
                    {
                        label: "Annual Benefit (AUD) - Green Roof",
                        data: this.state.benefit_roof,
                        pointBackgroundColor: 'rgba(26, 147, 111, 0.6)',
                        borderColor: 'rgba(26, 147, 111, 0.6)',
                        pointHoverBackgroundColor: 'rgba(255, 99, 132, 0.6)',
                        fill: false
                    }
                ]
            }
        }

        if (event.target.getAttribute('name') === "2") {
            console.log("222")
            chartTitle = "Green Facades"
            chartData = {
                labels: [...Array(51).keys()],
                datasets: [
                    {
                        label: "Annual Cost (AUD) - Green Facades",
                        data: this.state.cost_wall,
                        pointBackgroundColor: 'rgba(255, 99, 132, 0.6)',
                        borderColor: 'rgba(255, 99, 132, 0.6)',
                        pointHoverBackgroundColor: 'rgba(26, 147, 111, 0.6)',
                        fill: false
                    },
                    {
                        label: "Annual Benefit (AUD) - Green Facades",
                        data: this.state.benefit_wall,
                        pointBackgroundColor: 'rgba(26, 147, 111, 0.6)',
                        borderColor: 'rgba(26, 147, 111, 0.6)',
                        pointHoverBackgroundColor: 'rgba(255, 99, 132, 0.6)',
                        fill: false
                    }
                ]
            }
        }

        this.setState({
            title: chartTitle,
            data: chartData,
            option: event.target.getAttribute('name')
        })
    }

    render() {
        return (
            <>
                <section className="hero section is-medium" style={this.state.survey}>
                    <div className="hero-body">
                        <div className="container">
                            <ul className="steps is-centered has-content-centered is-horizontal">
                                <li className={this.state.stepOne}>
                                    <span className="steps-marker">
                                        {this.state.step <= 1
                                            ? 1
                                            : <span className="icon has-text-primary"><i class="fas fa-check"></i></span>
                                        }
                                    </span>
                                </li>
                                <li className={this.state.stepTwo}>
                                    <span className="steps-marker">
                                        {this.state.step <= 2
                                            ? 2
                                            : <span className="icon has-text-primary"><i class="fas fa-check"></i></span>
                                        }
                                    </span>
                                </li>
                                <li className={this.state.stepThree}>
                                    <span className="steps-marker">
                                        {this.state.step <= 3
                                            ? 3
                                            : <span className="icon has-text-primary"><i class="fas fa-check"></i></span>
                                        }
                                    </span>
                                </li>
                                <li className={this.state.stepFour}>
                                    <span className="steps-marker">
                                        {this.state.step <= 4
                                            ? 4
                                            : <span className="icon has-text-primary"><i class="fas fa-check"></i></span>
                                        }
                                    </span>
                                </li>
                            </ul>
                            <br /><br />
                            <div className="card">
                                <header className="card-header has-background-primary">
                                    <p className="card-header-title">
                                        <span className="icon has-text-white">
                                            <i className="fas fa-question-circle"></i>
                                        </span>&nbsp;&nbsp;
                                    <strong className="has-text-white">{this.state.question}</strong>
                                    </p>
                                </header>
                                <div className="card-content">
                                    <div className="content">
                                        <form onSubmit={this.nextStep}>
                                            <div className="control field">
                                                {this.state.step === 1 &&
                                                    <input className="input" type="number" name="roof" min="1" placeholder="Square metres" onChange={this.getValue} autoFocus required />
                                                }
                                                {this.state.step === 2 &&
                                                    <input className="input" type="number" name="wall" min="1" placeholder="Square metres" onChange={this.getValue} autoFocus required />
                                                }
                                                {this.state.step === 3 &&
                                                    <input className="input" type="number" name="budget" min="1" placeholder="AUD" onChange={this.getValue} autoFocus required />
                                                }
                                                {this.state.step === 4 &&
                                                    <input className="input" type="number" name="bill" min="1" placeholder="Kilowatt" onChange={this.getValue} autoFocus required />
                                                }

                                            </div>
                                            <br /><br />
                                            &nbsp;
                                            <button type="submit" className="button is-link" style={this.state.buttonRight}>
                                                <span>Next</span>
                                                <span className="icon">
                                                    <i className="fas fa-arrow-circle-right"></i>
                                                </span>
                                            </button>

                                            <button type="submit" id="resultButton" onClick={this.showResult} className="button is-warning" style={this.state.buttonLast}>
                                                <span className="icon">
                                                    <i className="fas fa-calculator"></i>
                                                </span>
                                                <span>Result</span>
                                            </button>
                                            <button className="button is-danger" onClick={this.previousStep} style={this.state.buttonLeft}>
                                                <span className="icon">
                                                    <i className="fas fa-arrow-circle-left"></i>
                                                </span>
                                                <span>Previous</span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="hero is-light" style={this.state.result}>
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns is-multiline is-variable is-2 is-vcentered">
                                <div className="column is-12">
                                    <h1 className="title">We recommend you</h1>
                                </div>
                                <div className="column is-3">
                                    <div className="card">
                                        {this.state.option === "1" &&
                                            <header className="card-header has-background-primary">
                                                <p className="card-header-title">
                                                    <span className="icon has-text-white">
                                                        <i className="fas fa-check"></i>
                                                    </span>&nbsp;&nbsp;
                                                <strong className="has-text-white">Selected</strong>
                                                </p>
                                            </header>
                                        }
                                        <div className="card-content">
                                            <strong>Green Roof</strong>
                                            <p>Card</p>
                                            <br /><br /><br />
                                            {this.state.option !== "1" &&
                                                <button name="1" className="button is-primary is-fullwidth" onClick={this.selectOption}>
                                                    Select
                                                </button>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="card">
                                        {this.state.option === "2" &&
                                            <header className="card-header has-background-primary">
                                                <p className="card-header-title">
                                                    <span className="icon has-text-white">
                                                        <i className="fas fa-check"></i>
                                                    </span>&nbsp;&nbsp;
                                                <strong className="has-text-white">Selected</strong>
                                                </p>
                                            </header>
                                        }
                                        <div className="card-content">
                                            <strong>Green Facades</strong>
                                            <p>Card</p>
                                            <br /><br /><br />
                                            {this.state.option !== "2" &&
                                                <button name="2" className="button is-primary is-fullwidth" onClick={this.selectOption}>
                                                    Select
                                            </button>

                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="card">
                                        {this.state.option === "3" &&
                                            <header className="card-header has-background-primary">
                                                <p className="card-header-title">
                                                    <span className="icon has-text-white">
                                                        <i className="fas fa-check"></i>
                                                    </span>&nbsp;&nbsp;
                                                <strong className="has-text-white">Selected</strong>
                                                </p>
                                            </header>
                                        }
                                        <div className="card-content">
                                            <strong>Green Facades - DIY</strong>
                                            <p>Card</p>
                                            <br /><br /><br />
                                            {this.state.option !== "3" &&
                                                <button name="3" className="button is-primary is-fullwidth" onClick={this.selectOption}>
                                                    Select
                                                </button>

                                            }
                                        </div>
                                        <span className="badge is-bottom is-warning">Best Option</span>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="card">
                                        {this.state.option === "4" &&
                                            <header className="card-header has-background-primary">
                                                <p className="card-header-title">
                                                    <span className="icon has-text-white">
                                                        <i className="fas fa-check"></i>
                                                    </span>&nbsp;&nbsp;
                                                <strong className="has-text-white">Selected</strong>
                                                </p>
                                            </header>
                                        }
                                        <div className="card-content">
                                            <strong>Indoor - DIY</strong>
                                            <p>Card</p>
                                            <br /><br /><br />
                                            {this.state.option !== "4" &&
                                                <button name="4" className="button is-primary is-fullwidth" onClick={this.selectOption}>
                                                    Select
                                            </button>

                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-12">
                                    <div className="card">
                                        <div className="card-content">
                                            <Line
                                                data={this.state.data}
                                                options={{
                                                    title: {
                                                        display: true,
                                                        fontSize: 15,
                                                        fontFamily: "Nunito",
                                                        text: this.state.title
                                                    },
                                                    legend: {
                                                        position: "bottom",
                                                        labels: {
                                                            fontFamily: "Nunito"
                                                        }
                                                    },
                                                    tooltips: {
                                                        titleFontFamily: "Nunito",
                                                        bodyFontFamily: "Nunito"
                                                    }
                                                }}
                                                height={100}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="card">
                                        <div className="card-content">
                                            <p>Card</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="card">
                                        <div className="card-content">
                                            <p>Card</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="card">
                                        <div className="card-content">
                                            <p>Card</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3">
                                    <div className="card">
                                        <div className="card-content">
                                            <p>Card</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="hero section is-primary is-vcentered" style={this.state.result}>
                    <div className="hero-body has-text-centered">
                        <div className="container">
                            <div className="buttons is-centered">
                                <button className="button is-danger is-outlined is-inverted" >
                                    <span className="icon"><i className="fas fa-calculator"></i></span>
                                    <span>Reset</span>
                                </button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="/plants" className="button is-info is-outlined is-inverted">
                                    <span className="icon"><i className="fas fa-search"></i></span>
                                    <span>Plant Selector</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}