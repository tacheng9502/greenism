// Modules
import React from "react";
import styled from 'styled-components';

// Components
import Breadcrumb from "../components/Breadcrumb";

// Assets
import plants_json from "../assets/data/plants.json";


// Content
const Image = styled.img`
        width: 100%;
        -webkit-border-radius: 7px;
        -moz-border-radius: 7px;
        border-radius: 7px;
    `
const bc_parent = "Interactive Tools";
const bc_child = "Plant Selector";


export default class Plants extends React.Component {

    render() {
        const plant = plants_json[this.props.match.params.plantId]
        const plantName = plant.name.split(";")[0];
        const plantImageUrl = plant.img;
        const type = plant.type.split("/").map(x => x[0].toUpperCase() +  x.slice(1))
        const plantType = type.join(", ");
        const plantHeight = plant.height;
        const plantFeature = plant.feature.join(", ");
        const plantBnefit = plant.benefit.join(", ");
        const plantMaintenance = plant.maintenance;
        const plantLight = plant.light.join(", ");
        const plantDrought = plant.drought;
        const plantWaterlogging = plant.waterlogging;
        const plantSoil = plant.compaction;

        return (

            <>
                <Breadcrumb parent={bc_parent} child={bc_child} />
                <section className="section has-background-white-ter">
                    <div className="container">
                        <a className="button is-primary is-outlined" href="/plants">
                            <span class="icon">
                                <i class="fas fa-arrow-left"></i>
                            </span>
                            <span>Back to search</span>
                        </a><br/><br/>
                        <div className="columns">
                            <div className="column has-text-centered">
                                <Image src={plantImageUrl} alt={plantName} /><br/><br/>
                                <h1 className="title is-spaced">{plantName}</h1>
                            </div>
                            <div className="column">
                                <div className="card">
                                    <header className="card-header has-background-primary">
                                        <p className="card-header-title">
                                            <span class="icon has-text-white">
                                                <i class="fas fa-seedling"></i>
                                            </span>&nbsp;&nbsp;
                                            <strong className="has-text-white">Characteristics</strong>
                                        </p>
                                    </header>
                                    <div className="card-content">
                                        <div className="content">
                                            <p><strong>Type: </strong>{plantType}</p>
                                            <p><strong>Height: </strong>{plantHeight}</p>
                                            <p><strong>Feature: </strong>{plantFeature}</p>
                                            <strong>Benefit: </strong><br /><p>{plantBnefit}</p>
                                            <strong>Maintenance: </strong><br /><p>{plantMaintenance}</p>
                                        </div>
                                    </div>
                                </div><br /><br />
                                <div className="card">
                                    <header className="card-header has-background-primary">
                                        <p className="card-header-title">
                                            <span class="icon has-text-white">
                                                <i class="fas fa-info-circle"></i>
                                            </span>&nbsp;&nbsp;
                                            <strong className="has-text-white">  Growing Conditions</strong>
                                        </p>
                                    </header>
                                    <div className="card-content">
                                        <div className="content">
                                            <p><strong>Light: </strong>{plantLight}</p>
                                            <p><strong>Drought tolerance: </strong>{plantDrought}</p>
                                            <p><strong>Waterlogging tolerance: </strong>{plantWaterlogging}</p>
                                            <p><strong>Soil compaction tolerance: </strong>{plantSoil}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}