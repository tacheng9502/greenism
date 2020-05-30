// Modules
import React from "react";
import { Line } from "react-chartjs-2";
import styled from 'styled-components';
import { firebaseApp } from "../Login"

// Components
import Breadcrumb from "../components/Breadcrumb";

// Assets
import img_estiamte from "../assets/img/estimate.png"
import img_greenFacades from "../assets/img/greenFacades.jpg";
import img_homeGarden from "../assets/img/homeGarden.jpg";

const questions = ["Q1 What is the area (in square metres) of the space on your house where you would like to construct a green roof?",
    "Q2 What is the area (in square metres) of the wall you are interested to build a green facade on?",
    "Q3 How much money (per square metre) do you want to initially invest in your green space ?",
    "Q4 What is the average monthly electricity bill for your house?"]

const bc_parent = "Recommendation Tools";
const bc_child = "Estimate Tool";

const Image = styled.img`
        width: 100%;
        -webkit-border-radius: 7px;
        -moz-border-radius: 7px;
        border-radius: 7px;
    `

export default class Estimate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            question: questions[0],
            roof: 0,
            cost_roof: [],
            benefit_roof: [],
            co2_roof: 0,
            cost_wall: [],
            benefit_wall: [],
            co2_wall: 0,
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
            option: "",
            recommend: "",
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
        this.refreshPage = this.refreshPage.bind(this);
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
        let initial_roof = 468.28 * this.state.roof
        let cost_roof = [initial_roof]
        let benefit_roof = [0]
        let recommendOP = ""
        let chartTitle = ""
        let chartData = {}
        let CO2Roof = 0
        let CO2Wall = 0

        CO2Roof = ((this.state.roof * 0.39 * 0.2325) / 0.28 * 12 * 50) * 1.62
        CO2Wall = ((this.state.wall * 0.39 * 0.052) / 0.28 * 12 * 50) * 1.62

        for (let i = 1; i <= 50; i++) {
            cost_facade.push(cost_facade[i - 1] + 28.7 * this.state.wall)
            benefit_facade.push(benefit_facade[i - 1] + 49.9 * this.state.wall)
            cost_roof.push(cost_roof[i - 1] + 10 * this.state.roof)
            benefit_roof.push(benefit_roof[i - 1] + 27 * this.state.roof)
        }

        if (parseInt(this.state.budget) >= 600) {
            recommendOP = "1"
        } else if (parseInt(this.state.budget) < 600 && parseInt(this.state.budget) >= 400) {
            recommendOP = "2"
        } else if (parseInt(this.state.budget) < 400 && parseInt(this.state.budget) >= 200) {
            recommendOP = "3"
        } else {
            recommendOP = "4"
        }

        //Find recommend

        if (recommendOP === "1") {
            chartTitle = "Green Roof - Cost-Benefit Analysis (50 years)"
            chartData = {
                labels: [...Array(51).keys()],
                datasets: [
                    {
                        label: "Annual Cost (AUD) - Green Roofs",
                        data: cost_roof,
                        pointBackgroundColor: 'rgba(255, 99, 132, 0.6)',
                        borderColor: 'rgba(255, 99, 132, 0.6)',
                        pointHoverBackgroundColor: 'rgba(63, 63, 68, 0.6)',
                        fill: false
                    },
                    {
                        label: "Annual Benefit (AUD) - Green Roofs",
                        data: benefit_roof,
                        pointBackgroundColor: 'rgba(26, 147, 111, 0.6)',
                        borderColor: 'rgba(26, 147, 111, 0.6)',
                        pointHoverBackgroundColor: 'rgba(63, 63, 68, 0.6)',
                        fill: false
                    }
                ]
            }
        }

        if (recommendOP === "2") {
            chartTitle = "Green Facades - Cost-Benefit Analysis (50 years)"
            chartData = {
                labels: [...Array(51).keys()],
                datasets: [
                    {
                        label: "Annual Cost (AUD) - Green Facades",
                        data: cost_facade,
                        pointBackgroundColor: 'rgba(255, 99, 132, 0.6)',
                        borderColor: 'rgba(255, 99, 132, 0.6)',
                        pointHoverBackgroundColor: 'rgba(63, 63, 68, 0.6)',
                        fill: false
                    },
                    {
                        label: "Annual Benefit (AUD) - Green Facades",
                        data: benefit_facade,
                        pointBackgroundColor: 'rgba(26, 147, 111, 0.6)',
                        borderColor: 'rgba(26, 147, 111, 0.6)',
                        pointHoverBackgroundColor: 'rgba(63, 63, 68, 0.6)',
                        fill: false
                    }
                ]
            }
        }

        this.setState({
            survey: { display: "none" },
            result: { display: "flex" },
            recommend: recommendOP,
            option: recommendOP,
            cost_wall: cost_facade,
            benefit_wall: benefit_facade,
            cost_roof: cost_roof,
            benefit_roof: benefit_roof,
            title: chartTitle,
            data: chartData,
            co2_roof: CO2Roof,
            co2_wall: CO2Wall
        })
    }

    selectOption(event) {
        let chartTitle = ""
        let chartData = {}

        if (event.target.getAttribute('name') === "1") {
            console.log("111")
            chartTitle = "Green Roof - Cost-Benefit Analysis (50 years)"
            chartData = {
                labels: [...Array(51).keys()],
                datasets: [
                    {
                        label: "Annual Cost (AUD) - Green Roof",
                        data: this.state.cost_roof,
                        pointBackgroundColor: 'rgba(255, 99, 132, 0.6)',
                        borderColor: 'rgba(255, 99, 132, 0.6)',
                        pointHoverBackgroundColor: 'rgba(63, 63, 68, 0.6)',
                        fill: false
                    },
                    {
                        label: "Annual Benefit (AUD) - Green Roof",
                        data: this.state.benefit_roof,
                        pointBackgroundColor: 'rgba(26, 147, 111, 0.6)',
                        borderColor: 'rgba(26, 147, 111, 0.6)',
                        pointHoverBackgroundColor: 'rgba(63, 63, 68, 0.6)',
                        fill: false
                    }
                ]
            }
        }

        if (event.target.getAttribute('name') === "2") {
            console.log("222")
            chartTitle = "Green Facades - Cost-Benefit Analysis (50 years)"
            chartData = {
                labels: [...Array(51).keys()],
                datasets: [
                    {
                        label: "Annual Cost (AUD) - Green Facades",
                        data: this.state.cost_wall,
                        pointBackgroundColor: 'rgba(255, 99, 132, 0.6)',
                        borderColor: 'rgba(255, 99, 132, 0.6)',
                        pointHoverBackgroundColor: 'rgba(63, 63, 68, 0.6)',
                        fill: false
                    },
                    {
                        label: "Annual Benefit (AUD) - Green Facades",
                        data: this.state.benefit_wall,
                        pointBackgroundColor: 'rgba(26, 147, 111, 0.6)',
                        borderColor: 'rgba(26, 147, 111, 0.6)',
                        pointHoverBackgroundColor: 'rgba(63, 63, 68, 0.6)',
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

    refreshPage() {
        window.location.reload(false);
    }

    render() {
        firebaseApp.auth().onAuthStateChanged(function (user) {
            if (!user) {
                window.location.replace("/")
            }
        });
        return (
            <>
                <Breadcrumb parent={bc_parent} child={bc_child} />
                <section className="hero section is-medium" style={this.state.survey}>
                    <div className="hero-body">
                        <div className="container">
                            <ul className="steps is-centered has-content-centered is-horizontal">
                                <li className={this.state.stepOne}>
                                    <span className="steps-marker">
                                        {this.state.step <= 1
                                            ? 1
                                            : <span className="icon has-text-primary"><i className="fas fa-check"></i></span>
                                        }
                                    </span>
                                </li>
                                <li className={this.state.stepTwo}>
                                    <span className="steps-marker">
                                        {this.state.step <= 2
                                            ? 2
                                            : <span className="icon has-text-primary"><i className="fas fa-check"></i></span>
                                        }
                                    </span>
                                </li>
                                <li className={this.state.stepThree}>
                                    <span className="steps-marker">
                                        {this.state.step <= 3
                                            ? 3
                                            : <span className="icon has-text-primary"><i className="fas fa-check"></i></span>
                                        }
                                    </span>
                                </li>
                                <li className={this.state.stepFour}>
                                    <span className="steps-marker">
                                        {this.state.step <= 4
                                            ? 4
                                            : <span className="icon has-text-primary"><i className="fas fa-check"></i></span>
                                        }
                                    </span>
                                </li>
                            </ul>
                            <br /><br />
                            <div class="columns is-centered">
                                <div class="column is-6-tablet is-6-desktop is-6-widescreen">
                                    <div className="card">
                                        <header className="card-header has-background-primary">
                                            <p className="card-header-title">
                                                <strong className="has-text-white">{this.state.question}</strong>
                                            </p>
                                        </header>
                                        <div className="card-content">
                                            <div className="content">
                                                <form onSubmit={this.nextStep}>
                                                    <div className="control field">
                                                        {this.state.step === 1 &&
                                                            <input className="input" type="number" name="roof" min="1" max="9999" placeholder="Square metres (1-9999)" onChange={this.getValue} autoFocus required />
                                                        }
                                                        {this.state.step === 2 &&
                                                            <input className="input" type="number" name="wall" min="1" max="9999" placeholder="Square metres (1-9999)" onChange={this.getValue} autoFocus required />
                                                        }
                                                        {this.state.step === 3 &&
                                                            <input className="input" type="number" name="budget" min="1" max="999999" placeholder="AUD per square metres (1-999999)" onChange={this.getValue} autoFocus required />
                                                        }
                                                        {this.state.step === 4 &&
                                                            <input className="input" type="number" name="bill" min="1" max="999999" placeholder="AUD (1-999999)" onChange={this.getValue} autoFocus required />
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
                        </div>
                    </div>
                </section>
                <section className="hero is-light" style={this.state.result}>
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns is-multiline is-variable is-2 is-vcentered">
                                <div className="column is-12">
                                    <h1 className="is-size-3">We recommend you &nbsp;
                                        <strong>
                                            {this.state.recommend === "1" && "Green Roof"}
                                            {this.state.recommend === "2" && "Green Facade"}
                                            {this.state.recommend === "3" && "DIY - Green Facade"}
                                            {this.state.recommend === "4" && "DIY - Home Garden"}
                                        </strong>
                                    </h1>
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
                                            <p><strong className="is-size-5">Green Roof</strong></p>
                                            <br /><p>Let a professional expert team help you build green roofs.</p><br />
                                            {this.state.option !== "1" &&
                                                <button name="1" className="button is-primary is-fullwidth" onClick={this.selectOption}>
                                                    Select
                                                </button>
                                            }
                                        </div>
                                        <span className="badge is-bottom is-warning" style={this.state.recommend === "1" ? { visibility: "visible" } : { visibility: "hidden" }}>Best Option</span>
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
                                            <p><strong className="is-size-5">Green Facade</strong></p>
                                            <br /><p>Let a professional expert team help you build green facades.</p><br />

                                            {this.state.option !== "2" &&
                                                <button name="2" className="button is-primary is-fullwidth" onClick={this.selectOption}>
                                                    Select
                                            </button>

                                            }
                                        </div>
                                        <span className="badge is-bottom is-warning" style={this.state.recommend === "2" ? { visibility: "visible" } : { visibility: "hidden" }}>Best Option</span>
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
                                            <p><strong className="is-size-5">DIY - Green Facades</strong></p>
                                            <br /><p>Build a green facade by yourself with lower cost.</p><br />
                                            {this.state.option !== "3" &&
                                                <button name="3" className="button is-primary is-fullwidth" onClick={this.selectOption}>
                                                    Select
                                                </button>

                                            }
                                        </div>
                                        <span className="badge is-bottom is-warning" style={this.state.recommend === "3" ? { visibility: "visible" } : { visibility: "hidden" }}>Best Option</span>
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
                                            <p><strong className="is-size-5">DIY - Home Garden</strong></p>
                                            <br /><p>Start eco-friendly DIY project at your home with small budget</p><br />
                                            {this.state.option !== "4" &&
                                                <button name="4" className="button is-primary is-fullwidth" onClick={this.selectOption}>
                                                    Select
                                                </button>
                                            }
                                        </div>
                                        <span className="badge is-bottom is-warning" style={this.state.recommend === "4" ? { visibility: "visible" } : { visibility: "hidden" }}>Best Option</span>
                                    </div>
                                </div>
                                <div className="column is-12" style={this.state.option === "1" || this.state.option === "2" ? { display: "block" } : { display: "none" }}>
                                    <div className="card">
                                        <header className="card-header has-background-primary">
                                            <p className="card-header-title">
                                                <span class="icon has-text-white">
                                                    <i class="fas fa-seedling"></i>
                                                </span>&nbsp;&nbsp;
                                                        {this.state.option === "1" &&
                                                    <strong className="has-text-white">Green Roof Description</strong>
                                                }
                                                {this.state.option === "2" &&
                                                    <strong className="has-text-white">Green Facade Description</strong>
                                                }

                                            </p>
                                        </header>
                                        <div className="card-content">
                                            <div className="content">
                                                {this.state.option === "1" &&
                                                    <p>Green roof is a vegetated landscape built up from a series of layers that are installed on a roof surface. <a href="/what">Learn more its benefits.</a></p>
                                                }
                                                {this.state.option === "2" &&
                                                    <p>A green facade is created by growing climbing plants up and across the facade of a building. <a href="/what">Learn more its benefits.</a></p>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-12" style={this.state.option === "1" || this.state.option === "2" ? { display: "block" } : { display: "none" }}>
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
                                <div className="column is-12" style={this.state.option === "3" || this.state.option === "4" ? { display: "block" } : { display: "none" }}>
                                    <div className="columns">
                                        <div className="column is-5 is-offset-1 has-text-centered">
                                            <Image src={img_greenFacades} alt="Green Facades" style={this.state.option === "3" ? { display: "block" } : { display: "none" }} />
                                            <Image src={img_homeGarden} alt="Home Garden" style={this.state.option === "4" ? { display: "block" } : { display: "none" }} />
                                        </div>
                                        <div className="column is-5">
                                            <div className="card">
                                                <header className="card-header has-background-primary">
                                                    <p className="card-header-title">
                                                        <span class="icon has-text-white">
                                                            <i class="fas fa-seedling"></i>
                                                        </span>&nbsp;&nbsp;
                                                        <strong className="has-text-white">Description</strong>
                                                    </p>
                                                </header>
                                                <div className="card-content">
                                                    <div className="content">
                                                        {this.state.option === "3" &&
                                                            <p>Professionally installed green facades will cost from $400/m2 upwards. DIY facades can be established more cheaply and have the same benefits.</p>
                                                        }
                                                        {this.state.option === "4" &&
                                                            <p>Going green in your home does not have to be a big-budget project. If you’re a homeowner or renter on a budget, making little changes to your lifestyle at home can help you incorporate eco-friendly habits without breaking the bank.</p>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3" style={this.state.option === "1" || this.state.option === "2" ? { display: "block" } : { display: "none" }}>
                                    <div className="card">
                                        <div className="card-content has-text-centered">
                                            <p className="is-size-6"><strong>Initial Cost</strong></p>
                                            <p className="is-size-1">
                                                <strong className="has-text-danger">
                                                    {this.state.option === "1" &&
                                                        this.state.cost_roof[0].toFixed()
                                                    }
                                                    {this.state.option === "2" &&
                                                        this.state.cost_wall[0].toFixed()
                                                    }
                                                </strong></p>
                                            <p className="is-size-6">AUD</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3" style={this.state.option === "1" || this.state.option === "2" ? { display: "block" } : { display: "none" }}>
                                    <div className="card">
                                        <div className="card-content has-text-centered">
                                            <p className="is-size-6"><strong>Total Cost</strong></p>
                                            <p className="is-size-1">
                                                <strong className="has-text-danger">
                                                    {this.state.option === "1" &&
                                                        this.state.cost_roof[this.state.cost_roof.length - 1].toFixed()
                                                    }
                                                    {this.state.option === "2" &&
                                                        this.state.cost_wall[this.state.cost_wall.length - 1].toFixed()
                                                    }
                                                </strong>
                                            </p>
                                            <p className="is-size-6">AUD</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3" style={this.state.option === "1" || this.state.option === "2" ? { display: "block" } : { display: "none" }}>
                                    <div className="card">
                                        <div className="card-content has-text-centered">
                                            <p className="is-size-6"><strong>Total Personal Benefit</strong></p>
                                            <p className="is-size-1">
                                                <strong className="has-text-success">
                                                    {this.state.option === "1" &&
                                                        this.state.benefit_roof[this.state.benefit_roof.length - 1].toFixed()
                                                    }
                                                    {this.state.option === "2" &&
                                                        this.state.benefit_wall[this.state.benefit_wall.length - 1].toFixed()
                                                    }
                                                </strong>
                                            </p>
                                            <p className="is-size-6">AUD</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3" style={this.state.option === "1" || this.state.option === "2" ? { display: "block" } : { display: "none" }}>
                                    <div className="card">
                                        <div className="card-content has-text-centered">
                                            <p className="is-size-6"><strong>CO<sub>2</sub> Reduction</strong></p>
                                            <p className="is-size-1">
                                                <strong className="has-text-success">
                                                    {this.state.option === "1" &&
                                                        this.state.co2_roof.toFixed()
                                                    }
                                                    {this.state.option === "2" &&
                                                        this.state.co2_wall.toFixed()
                                                    }
                                                </strong>
                                            </p>
                                            <p className="is-size-6">Tons</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="hero section is-primary is-vcentered" style={this.state.result}>
                    <div className="hero-body has-text-centered">
                        <h1 className="title is-3 has-text-white is-spaced">Next Step</h1>
                        <div className="container">
                            <div className="buttons is-centered">
                                <button className="button is-danger is-outlined is-inverted" onClick={this.refreshPage}>
                                    <span className="icon"><i className="fas fa-redo"></i></span>
                                    <span>Reset</span>
                                </button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {(this.state.option === "1" || this.state.option === "2") &&
                                    <a href="/finding" className="button is-info is-outlined is-inverted">
                                        <span className="icon"><i className="fas fa-search"></i></span>
                                        <span>Find Local Experts</span>
                                    </a>
                                }
                                {(this.state.option === "3") &&
                                    <a href="/siteAnalysis" className="button is-info is-outlined is-inverted">
                                        <span className="icon"><i className="fas fa-book"></i></span>
                                        <span>DIY Green Facades Guide</span>
                                    </a>
                                }
                                {(this.state.option === "4") &&
                                    <a href="/diy" className="button is-info is-outlined is-inverted">
                                        <span className="icon"><i className="fas fa-book"></i></span>
                                        <span>DIY Home Garden Guide</span>
                                    </a>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}