// Modules
import React from "react";
import styled from 'styled-components';

// Assets
import plants_json from "../assets/data/plants.json";

const Image = styled.img`
    transition: all 125ms ease-in-out;
    border-radius: 15px 15px 0px 0px;
    &:hover{
        transform: scale(1.1);
    }
`

export default class HeroCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: plants_json.length,
            light_fullSun: true,
            light_partialSun: true,
            light_fullShade: true,
            height: "All",
            drought: "All",
            water: "All",
            soil: "All",
            plants: plants_json
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        let plants_showing = []
        let fullSun = this.state.light_fullSun;
        let partialSun = this.state.light_partialSun;
        let fullShade = this.state.light_fullShade;
        let height_check = this.state.height;
        let drought_check = this.state.drought;
        let water_check = this.state.water;
        let soil_check = this.state.soil;

        if (event.target.name === "light_fullSun") {
            fullSun = !this.state.light_fullSun
        } else if (event.target.name === "light_partialSun") {
            partialSun = !this.state.light_partialSun
        } else if (event.target.name === "light_fullShade") {
            fullShade = !this.state.light_fullShade
        }

        if (event.target.name === "drought") {
            drought_check = event.target.value
        } else if (event.target.name === "water") {
            water_check = event.target.value
        } else if (event.target.name === "soil") {
            soil_check = event.target.value
        } else if (event.target.name === "height") {
            height_check = event.target.value
        }

        for (const element of plants_json) {
            if (height_check !== "All" && element["height"] !== height_check) {
                continue;
            }
            if (drought_check !== "All" && element['drought'] !== drought_check) {
                continue;
            }
            if (water_check !== "All" && element['waterlogging'] !== water_check) {
                continue;
            }
            if (soil_check !== "All" && element['compaction'] !== soil_check) {
                continue;
            }
            if (fullSun && element['light'].includes("Full sun")) {
                plants_showing.push(element);
            } else if (partialSun && element['light'].includes("Partial sun")) {
                plants_showing.push(element);
            } else if (fullShade && element['light'].includes("Full shade")) {
                plants_showing.push(element);
            }
        }

        this.setState({
            [event.target.name]: value,
            plants: plants_showing,
            num: plants_showing.length
        });
    }

    render() {
        return (
            <section className="hero section has-background-white-ter" >
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title is-3 has-text-weight-bold has-text-centered">Plant Selector</h1>
                        <p className="has-text-centered subtitle">Filter out plants based on ecological factors</p>
                        <div className="card">
                            <header className="card-header has-background-primary">
                                <p className="card-header-title">
                                    <strong className="has-text-white">Filters</strong>
                                </p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    <div className="container">
                                        <div className="columns is-multiline is-variable is-2">
                                            <div className="column is-2 ">
                                                <div className="field">
                                                    <span><strong>Light</strong></span>
                                                </div>
                                                <div className="field">
                                                    <input className="is-checkradio" id="light_fullSun" type="checkbox" name="light_fullSun" checked={this.state.light_fullSun} onChange={this.handleChange} />
                                                    <label htmlFor="light_fullSun">Full Sun</label>
                                                </div>
                                                <div className="field">
                                                    <input className="is-checkradio" id="light_partialSun" type="checkbox" name="light_partialSun" checked={this.state.light_partialSun} onChange={this.handleChange} />
                                                    <label htmlFor="light_partialSun">Partial Sun</label>
                                                </div>
                                                <div className="field">
                                                    <input className="is-checkradio" id="light_fullShade" type="checkbox" name="light_fullShade" checked={this.state.light_fullShade} onChange={this.handleChange} />
                                                    <label htmlFor="light_fullShade">Full Shade</label>
                                                </div>
                                            </div>
                                            <div className="column is-one-fifth">
                                                <div className="field"><strong>Height</strong></div>
                                                <div className="field">
                                                    <input className="is-checkradio" id="height_all" value="All" type="radio" name="height" checked={this.state.height === "All"} onChange={this.handleChange} />
                                                    <label htmlFor="height_all">All</label>
                                                </div>
                                                <div className="field">
                                                    <input className="is-checkradio" id="height_005" value="0-0.5 m" type="radio" name="height" checked={this.state.height === "0-0.5 m"} onChange={this.handleChange} />
                                                    <label htmlFor="height_005">0-0.5 m</label>
                                                </div>
                                                <div className="field">
                                                    <input className="is-checkradio" id="height_051" value="0.5-1 m" type="radio" name="height" checked={this.state.height === "0.5-1 m"} onChange={this.handleChange} />
                                                    <label htmlFor="height_051">0.5-1 m</label>
                                                </div>
                                                <div className="field">
                                                    <input className="is-checkradio" id="height_12" value="1-2 m" type="radio" name="height" checked={this.state.height === "1-2 m"} onChange={this.handleChange} />
                                                    <label htmlFor="height_12">1-2 m</label>
                                                </div>
                                                <div className="field">
                                                    <input className="is-checkradio" id="height_23" value="2-3 m" type="radio" name="height" checked={this.state.height === "2-3 m"} onChange={this.handleChange} />
                                                    <label htmlFor="height_23">2-3 m</label>
                                                </div>
                                            </div>
                                            <div className="column is-one-fifth">
                                                <div className="field">
                                                    <span><strong>Drought tolerance</strong></span>&nbsp;&nbsp;
                                                    <span className="icon is-small has-tooltip-multiline" data-tooltip="The ability of plants to maintain survival and growth under arid or drought conditions. Perennial succulent plants and xerophytes with broad root systems have better tolerance for drought. Perennial non-succulent plants and annual plants are relatively poor.">
                                                        <i class="fas fa-question-circle"></i>
                                                    </span>
                                                </div>
                                                <div className="field">
                                                    <input className="is-checkradio" id="drought_all" value="All" type="radio" name="drought" checked={this.state.drought === "All"} onChange={this.handleChange} />
                                                    <label htmlFor="drought_all">All</label>
                                                </div>
                                                <div className="field">
                                                    <input className="is-checkradio" id="drought_vGood" value="Very good" type="radio" name="drought" checked={this.state.drought === "Very good"} onChange={this.handleChange} />
                                                    <label htmlFor="drought_vGood">Very Good</label>
                                                </div>
                                                <div className="field">
                                                    <input className="is-checkradio" id="drought_mGood" value="Moderately good" type="radio" name="drought" checked={this.state.drought === "Moderately good"} onChange={this.handleChange} />
                                                    <label htmlFor="drought_mGood">Moderately Good</label>
                                                </div>
                                                <div className="field">
                                                    <input className="is-checkradio" id="drought_average" value="Average" type="radio" name="drought" checked={this.state.drought === "Average"} onChange={this.handleChange} />
                                                    <label htmlFor="drought_average">Average</label>
                                                </div>
                                                <div className="field">
                                                    <input className="is-checkradio" id="drought_poor" value="Poor" type="radio" name="drought" checked={this.state.drought === "Poor"} onChange={this.handleChange} />
                                                    <label htmlFor="drought_poor">Poor</label>
                                                </div>
                                            </div>
                                            <div className="column is-one-fifth">
                                                <div className="field">
                                                    <span><strong>Waterlogging tolerance</strong></span>&nbsp;&nbsp;
                                                    <span className="icon is-small has-tooltip-multiline" data-tooltip="The ability of plants to maintain survival and growth in soil saturated with water. Shrubs and perennial herbs do not seem to be good at waterlogging tolerance. Cacti, succulent flowers, and some woody flowers are relatively resistant to waterlogging.">
                                                        <i class="fas fa-question-circle"></i>
                                                    </span>
                                                </div>
                                                <div className="field">
                                                    <input className="is-checkradio" id="water_all" value="All" type="radio" name="water" checked={this.state.water === "All"} onChange={this.handleChange} />
                                                    <label htmlFor="water_all">All</label>
                                                </div>
                                                <div className="field">
                                                    <input className="is-checkradio" id="water_vGood" value="Very good" type="radio" name="water" checked={this.state.water === "Very good"} onChange={this.handleChange} />
                                                    <label htmlFor="water_vGood">Very Good</label>
                                                </div>
                                                <div className="field">
                                                    <input className="is-checkradio" id="water_mGood" value="Moderately good" type="radio" name="water" checked={this.state.water === "Moderately good"} onChange={this.handleChange} />
                                                    <label htmlFor="water_mGood">Moderately Good</label>
                                                </div>
                                                <div className="field">
                                                    <input className="is-checkradio" id="water_average" value="Average" type="radio" name="water" checked={this.state.water === "Average"} onChange={this.handleChange} />
                                                    <label htmlFor="water_average">Average</label>
                                                </div>
                                                <div className="field">
                                                    <input className="is-checkradio" id="water_poor" value="Poor" type="radio" name="water" checked={this.state.water === "Poor"} onChange={this.handleChange} />
                                                    <label htmlFor="water_poor">Poor</label>
                                                </div>
                                            </div>
                                            <div className="column is-one-fifth">
                                                <div className="field">
                                                    <span><strong>Soil compaction</strong></span>&nbsp;&nbsp;
                                                    <span className="icon is-small has-tooltip-multiline" data-tooltip="The ability of plants to maintain survival and growth in the soil that is compressed and expelled air. Most grasses and some shrubs can survive in compacted soil. Angiosperms are relatively resistant to compacted soil.">
                                                        <i class="fas fa-question-circle"></i>
                                                    </span>
                                                </div>
                                                <div className="field">
                                                    <input className="is-checkradio" id="soil_all" value="All" type="radio" name="soil" checked={this.state.soil === "All"} onChange={this.handleChange} />
                                                    <label htmlFor="soil_all">All</label>
                                                </div>
                                                <div className="field">
                                                    <input className="is-checkradio" id="soil_vGood" value="Very good" type="radio" name="soil" checked={this.state.soil === "Very good"} onChange={this.handleChange} />
                                                    <label htmlFor="soil_vGood">Very Good</label>
                                                </div>
                                                <div className="field">
                                                    <input className="is-checkradio" id="soil_mGood" value="Moderately good" type="radio" name="soil" checked={this.state.soil === "Moderately good"} onChange={this.handleChange} />
                                                    <label htmlFor="soil_mGood">Moderately Good</label>
                                                </div>
                                                <div className="field">
                                                    <input className="is-checkradio" id="soil_average" value="Average" type="radio" name="soil" checked={this.state.soil === "Average"} onChange={this.handleChange} />
                                                    <label htmlFor="soil_average">Average</label>
                                                </div>
                                                <div className="field">
                                                    <input className="is-checkradio" id="soil_poor" value="Poor" type="radio" name="soil" checked={this.state.soil === "Poor"} onChange={this.handleChange} />
                                                    <label htmlFor="soil_poor">Poor</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br /><br />
                        <h1 className="title is-3 has-text-weight-bold has-text-centered">Displaying {this.state.num} plant(s)</h1>
                        <br />
                        <div className="columns is-multiline is-variable is-3">
                            {this.state.plants.map((plant, i) => (
                                <div className="column is-3" key={plant.index}>
                                    <div className="card" style={{ borderRadius: "15px", overflow: "hidden" }}>
                                        <a href={"/plantDetail/" + plant.index} title={plant.name.split(";")[0]} >
                                            <div className="card-image" style={{ overflow: "hidden", borderRadius: "15px, 15px 0px 0px" }}>
                                                <figure className="image is-256x256" >
                                                    <Image src={plant.img} alt={plant.name.split(";")[0]} />
                                                </figure>
                                            </div>
                                            <div className="card-cotent has-text-centered">
                                                <div className="field" style={{ padding: "1em" }}>
                                                    <strong className="has-text-primary">{plant.name.split(";")[0]}</strong>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}