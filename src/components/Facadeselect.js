import React, { Component } from 'react';
import "../components/Designtable.css";


export default class Facadeselect extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            establishments: [
                {"Species" : "Akebia quinata", "Type" : "Twining", "Screening and Growth Rate" : "Medium cover and growth rate", "Light Tolerance" : "Average"},
                {"Species" : "Aphanopetalum resinosum", "Type" : "Twining", "Screening and Growth Rate" : "Medium cover and growth rate", "Light Tolerance" : "Average"},
                {"Species" : "Cissus antarctica", "Type" : "Tendril", "Screening and Growth Rate" : "High cover and growth rate", "Light Tolerance" : "Tolerates low light"},
                {"Species" : "Clematis aristata", "Type" : "Twining", "Screening and Growth Rate" : "Medium cover and growth rate", "Light Tolerance" : "Tolerates low light"},
                {"Species" : "Clematis armandii", "Type" : "Twining", "Screening and Growth Rate" : "Low cover and growth rate", "Light Tolerance" : "Average"},
                {"Species" : "Clematis montana", "Type" : "Twining", "Screening and Growth Rate" : "Low cover and growth rate", "Light Tolerance" : "Average"},
                {"Species" : "Distichtus buccinatoria", "Type" : "Tendril", "Screening and Growth Rate" : "High cover and medium growth rate", "Light Tolerance" : "Requires high light"},
                {"Species" : "Ficus pumila", "Type" : "Self-clinger", "Screening and Growth Rate" : "High cover and medium growth rate", "Light Tolerance" : "Requires high light"},
                {"Species" : "Hibbertia scandens", "Type" : "Twining", "Screening and Growth Rate" : "Medium cover and growth rate", "Light Tolerance" : "Requires high light"},
                {"Species" : "Muehlenbeckia complexa", "Type" : "Twining", "Screening and Growth Rate" : "High cover and growth rate", "Light Tolerance" : "Average"},
                {"Species" : "Kennedia rubicunda", "Type" : "Twining", "Screening and Growth Rate" : "Medium cover and high growth rate", "Light Tolerance" : "Requires high light"},
                {"Species" : "Pandorea pandorana", "Type" : "Twining", "Screening and Growth Rate" : "High cover and growth rate", "Light Tolerance" : "Average"},
                {"Species" : "Pandorea jasminoides", "Type" : "Twining", "Screening and Growth Rate" : "Medium cover and growth rate", "Light Tolerance" : "Average"},
                {"Species" : "Parthenocissus quinquefolia", "Type" : "Self-clinger", "Screening and Growth Rate" : "High cover and medium growth rate", "Light Tolerance" : "Average"},
                {"Species" : "Parthenocissus tricuspidata", "Type" : "Self-clinger", "Screening and Growth Rate" : "High cover and growth rate", "Light Tolerance" : "Requires high light"},
                {"Species" : "Podranea ricasoliana", "Type" : "Scandent shrub", "Screening and Growth Rate" : "High cover and growth rate", "Light Tolerance" : "Requires high light"},
                {"Species" : "Vitis vinifera", "Type" : "Tendril", "Screening and Growth Rate" : "Medium cover and growth rate", "Light Tolerance" : "Requires high light"},
                {"Species" : "Trachelospermum jasminoides", "Type" : "Twining", "Screening and Growth Rate" : "High cover and medium growth rate", "Light Tolerance" : "Average"},
                {"Species" : "Wisteria sinensis", "Type" : "Twining", "Screening and Growth Rate" : "Low cover and high growth rate", "Light Tolerance" : "Requires high light"},
            ]
        }

    }
    renderTableData() {
        return this.state.establishments.map((establishment, index) => {
        const { "Species": Species, "Type": Type, "Screening and Growth Rate": Rate, "Light Tolerance": Light } = establishment //destructuring
        console.log(Species, Type, Rate, Light)
        return (
            <tr key={Species}>
                <td>{Species}</td>
                <td>{Type}</td>
                <td>{Rate}</td>
                <td>{Light}</td>
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

