// Modules
import React from "react";


// Components
import Breadcrumb from "../components/Breadcrumb";
import HeroImageRight from "../components/HeroImageRight";
import HeroImageLeft from "../components/HeroImageLeft";
import HeroText from "../components/HeroText";
import Image from "../components/Image";
import bulmaCollapsible from '@creativebulma/bulma-collapsible';
import Designtable from "../components/Designtable";
import Facadeselect from "../components/Facadeselect";


// Assets
import hir_image from "../assets/img/design.png";
import img_greenfacadeselect from "../assets/img/greenfacadeselect.png";
import img_money from "../assets/img/money.png";
import img_law from "../assets/img/law.png";
import img_establishment from "../assets/img/establishment.png";

export default class Design extends React.Component {
    componentDidMount() {
        this.collapsibles = bulmaCollapsible.attach(".is-collapsible", {
            container: this.refs.collapsibles
        });
    }

    render() {
        const hir_title_1 = `How to design and plan your green infrastructures?`
        const hir_subtitle_1 = `The most important decisions about a green facade are made at the design stage. The benefits of the installation, how easy it will be to build and maintain and how it will operate day-to-day, all depend on the initial design. This chapter provides information to help develop a well-considered, achievable design that will work in the long term.`
        
        const ht_title_1 = "How to design and plan your green infrastructures?";
        const ht_subtitle_1 = "Some tips for designing and planning green facade"
        
        const rows_2 = [{
            key: "collapsible-card-1", url: "#collapsible-card-1",
            title: "Low cost and easy to install",
            content: `Use a direct attaching species of plant, grown from the ground at the base
            of the wall.`
        }, {
            key: "collapsible-card-2", url: "#collapsible-card-2",
            title: "A multi-storey facade greening",
            content: `Include containers at different heights, include cabling or lattice support
            structures for twining plants, ensure access for maintenance, provide
            irrigation, consider secondary protection of plants against stem damage,
            e.g. wind protection trellis.`
        }, {
            key: "collapsible-card-3", url: "#collapsible-card-3",
            title: "Screening of an unsightly view",
            content: `Use evergreen species to ensure year-round screening, create a structure for
            the plants to grow on.`
        }, {
            key: "collapsible-card-4", url: "#collapsible-card-4",
            title: "Maximise thermal benefits",
            content: `Use deciduous species if heat gain is desired in winter; ensure very leafy
            plants, covering the entire wall for providing best shade in summer, particularly
            on north and west facing walls; provide a structure at least 100 mm off the
            wall of a building for the plants to grow on, leaving an air gap between the
            building and green plants to maximise cooling effect.`
        }, {
            key: "collapsible-card-5", url: "#collapsible-card-5",
            title: "Produce food",
            content: `Increase depth and organic content of the substrate, ensure good access to
            the site, provide irrigation.`
        }, {
            key: "collapsible-card-6", url: "#collapsible-card-6",
            title: "Provide biodiversity outcomes",
            content: `Include a variety of species, with habitat features such as nectar producing
            flowers, fruits, capacity to support nests, create protected or visually
            prominent areas.`
        }
        ]

        const hif_title = "Other general aspects you may need to consider";
        const hif_subtitle = "A successfull green infrastructure should be considered as comprehensive as possible"
        const rows_3 = [{
            "title": "Cost considerations",
            "subtitle": `Costs can be reduced in small projects as ‘do it yourself’ (DIY) installations, involving less personnel and smaller spaces.            
            DIY – Green Facades – DIY facades can be established at less than $400/m2.`,
            "img": <Image img={img_money} imgAlt="Cost considerations" />, "isImage": "True"
        },
        {
            "title": "Local law considerations",
            "subtitle": `Compliance with laws of the local council is required during the building and maintenance of green facades. Laws will often address issues related to: 
            • management and disposal of waste products, such as pruning material generated 
            • management of vegetation considered to be a weed or fire risk 
            • management of overhanging vegetation on public land or that which has a negative impact on lighting or traffic signs 
            • drainage over public land 
            • use of elevated working platforms or cranes on public land during construction or maintenance 
            • access by emergency services – do not impede the safe egress of occupants in an emergency`,
            "img": <Image img={img_law} imgAlt="Local law considerations" />, "isImage": "True"
        },
        ];
        
        const hil_imgWidth = "225px"
        const ht_title_2 = "Next Chapter"
        const ht_subtitle_2 = "How to build and install green infrastructures?"
        const ht_url = "/installation"

        return (
            <>
                <Breadcrumb parent="Self-Planting Guidelines" child="Design and Planning" />
                <HeroImageRight title={hir_title_1} subtitle={hir_subtitle_1} img={hir_image} />
                <HeroText title={ht_title_1} subtitle={ht_subtitle_1} isT={true}/>
                <br></br>
                <br></br>
                <div className="container is-block is-relative">
                    <h1 className="title has-text-weight-bold is-8 has-text-centered">Green facade design goals and considerations</h1>
                    <br />
                    <div ref="collapsibles" id="accordion">
                        {rows_2.map((item) =>
                            <>
                            <div className="card">
                                <header class="card-header has-background-primary">
                                    <p class="card-header-title has-text-white">
                                        {item.title}
                                    </p>
                                    <a href={item.url} data-action="collapse" class="card-header-icon is-hidden-fullscreen" aria-label="more options">
                                        <span class="icon has-text-white">
                                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                                        </span>
                                    </a>
                                </header>
                                <div id={item.key} class="is-collapsible">
                                    <div class="card-content">
                                        <p>
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        <br />
                        </>
                        )}
                    </div>
                </div>

                <div className="hero-body">
                    <div className="container">
                        <div class="columns is-variable">
                            <div class="column is-12">
                                <h1 className="title has-text-weight-bold has-text-centered">Green facade plant selection</h1>
                                <p className="has-text-centered">The following table indicates some common climbing plants used 
                                    in Victoria, how they attach, their ability to cover an area of facade – how 
                                    well they screen (high to low cover) and how fast they grow (this indicates 
                                    how much maintenance they require) – and their light tolerance. Average 
                                    in the table indicates that they are not known to be particularly needy 
                                    of high light nor particularly tolerant of low light. Note that the mature 
                                    size will be affected by the soil volume available.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <Facadeselect />

                <HeroImageLeft title={hif_title} subtitle={hif_subtitle} rows={rows_3} imgWidth={hil_imgWidth} />

                <div className="hero-body">
                    <div className="container">
                        <div class="columns is-variable">
                            <div class="column is-12">
                                <h3 className="title has-text-centered has-text-weight-bold is-5">Plant establishment considerations</h3>
                                <p className="has-text-centered">Good plant establishment is critical for the long-term health and performance of plantings in green facades. In the design stage this includes consideration of multiple factors, including:</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Designtable />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <HeroText title={ht_title_2} subtitle={ht_subtitle_2} url={ht_url} isUrl={true} />
            </>
        )
    }
}

//export default Design;