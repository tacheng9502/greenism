import React, { Component } from 'react';
import "../components/Designtable.css";


export default class Maintenancetable extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            establishments: [
                {"Maintenance Objective": "Maintain planting design", "Task": "Plant replacement, infill plantings"},
                {"Maintenance Objective": "Maintain plant growth", "Task": "Remove waste plant material (leaf litter, prunings, weeds), inspect for signs of pests or disease and treat as needed, make seasonal adjustments to irrigation volume and frequency as needed, ensure adequate nutrition levels for plants; inspect after severe weather events (e.g. wind or heat) to look for signs of stress"},
                {"Maintenance Objective": "Minimise weeds", "Task": "Mulching, weed control"},
                {"Maintenance Objective": "Manage lawns", "Task": "Regular mowing, annual renovation"},
                {"Maintenance Objective": "Maintain trees", "Task": "Regular pruning, annual tree inspection, brace and support as needed"},
                {"Maintenance Objective": "Maintain climbing plants", "Task": "Annual or biannual pruning to maintain density and cover and to remove growth from fixtures (windows, drains). Rejuvenate to renovate habit and growth"},
                {"Maintenance Objective": "Rejuvenate climbing plants", "Task": "Vigorous pruning to renew stems and encourage new basal growth (every 5-7 years)"},
                {"Maintenance Objective": "Monitor plant performance", "Task": "Maintain records of plant health, vigour and coverage, pest and disease impact"},
                {"Maintenance Objective": "Maintain substrate", "Task": "Top-up of growing substrate may be required due to wind, rain or animal activity (check the depth of the growing substrate before any additions are made to ensure weight loadings are not exceeded)"},
                {"Maintenance Objective": "Maintain irrigation (and fertigation) systems", "Task": "Manually test and inspect the irrigation system regularly and monitor any automated systems (check volume of irrigation delivered, its frequency, substrate moisture content, and, for hydroponic green walls, nutrient levels in the water supply)"},
                {"Maintenance Objective": "Monitor plant nutrition", "Task": "Maintain a log of fertiliser additions and records of pH and electrical conductivity values before and after addition of fertiliser"},
                {"Maintenance Objective": "Maintain drainage", "Task": "Ensure roof drains are clear and functioning, remove dirt, litter and other deposits from drain inspection chambers, check plumbing hardware, check condition of filter sheet and deeper layers if necessary"},
                {"Maintenance Objective": "Maintain non-vegetated zones", "Task": "Remove vegetation from perimeter zones and around other equipment and fixtures"},
                {"Maintenance Objective": "Maintain wind protection features", "Task": "Check the condition and fit of protection systems"},
                {"Maintenance Objective": "Maintain safety systems", "Task": "Check safety anchor points for fall arrest systems, check access points, e.g. ladders and stairways, check electrical safety of power points, lighting and irrigation control system"},
                {"Maintenance Objective": "Maintain waterproofing", "Task": "Inspect flashings over waterproofing membrane terminations, inspect wall fabric for any damage from water, fertiliser or plants, conduct leak detection of waterproofing on a green roof – if possible"},
                {"Maintenance Objective": "Maintain other hardscapes", "Task": "Clean or oil decking or furniture, inspect green wall or facade support systems for any loose attachments or fittings"},
            ]
        }
    }
    renderTableData() {
        return this.state.establishments.map((establishment, index) => {
        const { "Maintenance Objective": Maintenance, "Task": Task } = establishment //destructuring
        console.log(Maintenance, Task)
        return (
            <tr key={Maintenance}>
                <td>{Maintenance}</td>
                <td>{Task}</td>
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

