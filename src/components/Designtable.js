import React, { Component } from 'react';
import "../components/Designtable.css";


export default class Designtable extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            establishments: [
                { Consideration: 'Use of high quality planting stock', Explanation: 'Stock that is too advanced or has overgrown its containers has high water needs and can be slow to establish on a site. Planting stock should be of an appropriate size to achieve the aims of the project, in terms of growth rate and coverage. It should also be completely free of weeds, pests and disease.' },
                { Consideration: 'Plant production in a high quality growing medium', Explanation: 'In some cases using a medium with similar physical properties to the final growing substrate will assist in promoting plant growth.' },
                { Consideration: 'Working in with seasonal conditions', Explanation: 'In most situations planting is best completed between autumn and early spring. This will assist plant establishment and growth, well before the warmer and drier conditions of summer.' },
                { Consideration: 'Establishment irrigation', Explanation: 'Allowance should be made for suitable irrigation, usually for a minimum of six months, to avoid moisture stress and to promote plant growth across the site.' },
                { Consideration: 'Weed control', Explanation: 'During establishment, weeds will compete vigorously with designed plantings on a green roof, wall or facade. Weeds must be controlled until the plantings achieve the desired growth rates and/or coverage.' }
            ]
        }
    }
    renderTableData() {
        return this.state.establishments.map((establishment, index) => {
        const { Consideration, Explanation } = establishment //destructuring
        return (
            <tr key={Consideration}>
                <td>{Consideration}</td>
                <td>{Explanation}</td>
            </tr>
        )
        })
    }
    renderTableHeader() {
        let header = Object.keys(this.state.establishments[0])
        return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
    })
}

    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
        return (
            <div class="columns is-12">
                <table id='establishments'>
                <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}   
                </tbody>               
                </table>
            </div>
        )
    }
}

