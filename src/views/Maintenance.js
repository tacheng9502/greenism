// Modules
import React from "react";

// Components
import Breadcrumb from "../components/Breadcrumb";
import HeroImageRight from "../components/HeroImageRight";
import HeroImageLeft from "../components/HeroImageLeft";
import HeroText from "../components/HeroText";
import Image from "../components/Image";

// Assets
import hir_image from "../assets/img/maintenance.svg";
import img_planning from "../assets/img/planning.png";
import img_task from "../assets/img/task.png";
import img_nutrition from "../assets/img/nutrition.png";

function Maintenance() {
    const bc_parent = "Self-Planting Guidelines"
    const bc_child = "Maintenance"
    const hir_title = `The importance of maintening green infrastructures`
    const hir_subtitle = `This chapter provides information to help with the development of maintenance plans. A detailed maintenance plan will outline performance standards, tasks to be undertaken and the resources required to achieve them. Once created, maintenance plans should be reviewed at least annually to ensure all maintenance needs are being met.`

    const rows = [{
        "title": "Maintenance planning",
        "subtitle": `A maintenance plan should include a clear description of:
                   • maintenance objectives – created based on the design intent, or the landscaping or environmental objectives that were the basis for the roof, wall or facade development
                   • performance targets, such as the time frame for complete coverage of an area by plants and foliage
                   • resources available
                   Maintenance planning should also incorporate risk management, with the aim of reducing or eliminating the likelihood of failure that could result in property damage or personal injury.
                   `,
        "img": <Image img={img_planning} imgAlt="Increased property value and other benefits for building owners" />, "isImage": "True"
    },
    {
        "title": "Plant nutrition",
        "subtitle": `Hard surfaces in urban environments, such as concrete, brick, glass, asphalt and roofing, have a high thermal mass, collecting the sun’s heat during the day and re-radiating it slowly back into the atmosphere. This contributes to a rise in ambient temperature in cities, creating large, stable masses of hot air (urban heat islands), especially during periods of calm, still weather. When green wall and facade plants are grown on a support system that leaves a gap between the wall and the planting, hot air moves up by convection through the space between the wall and the vegetation, providing passive cooling.`,
        "img": <Image img={img_nutrition} imgAlt="Cooling a city – urban heat island effect" />, "isImage": "True"
    }
    ];

    const ht_title = "How could you maintain your green infrastructures?";
    const ht_subtitle = "You may need to consider 3 aspects.";

    return (
        <>
            <Breadcrumb parent={bc_parent} child={bc_child} />
            <HeroImageRight title={hir_title} subtitle={hir_subtitle} img={hir_image} size="is-medium" />
            <HeroText title={ht_title} subtitle={ht_subtitle} isT={true} />
            <HeroImageLeft title={null} subtitle={null} rows={rows} imgWidth="225px" />
            <section className="hero section is-block is-relative">
                <div className="hero-body">
                    <div className="container">
                        <div class="columns is-variable">
                            <div class="column is-4">
                                <h3 className="title has-text-weight-bold is-5">Maintenance tasks</h3>
                                <p>Some typical maintenance activities for green roofs, walls and facades are outlined in the table below. These are intended as a general guide only: each site will have its own specific requirements and some listed will be more relevant and/or specific to a roof or a facade.</p>
                            </div>
                            <div class="column is-8">
                                <Image img={img_task} imgAlt="Tasks" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Maintenance;