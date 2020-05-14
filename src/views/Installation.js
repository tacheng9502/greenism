// Modules
import React from "react";

// Components
import Breadcrumb from "../components/Breadcrumb";
import HeroImageRight from "../components/HeroImageRight";
import HeroImageLeft from "../components/HeroImageLeft";
import HeroText from "../components/HeroText";
import Image from "../components/Image";

// Assets
import img_start from "../assets/img/start.png";
import img_protection from "../assets/img/protection.png";
import img_soil from "../assets/img/soil.png";
import img_vege from "../assets/img/vege.png";
import img_drainage from "../assets/img/drainage.png";


function Installation() {
    const bc_parent = "Self-Planting Guidelines";
    const bc_child = "Building and Installation";

    const hir_title = `Start a green infrastructure!`
    const hir_subtitle = `This chapter provides general advice about building green
    facades, including occupational health and safety, insurance considerations and
    what to expect at project completion on a large-scale job which has a project
    manager and several consultants.`;
    const hir_image = img_start;
    const hir_size = "is_medium";

    const ht_title_1 = "How to build and install green facades?";
    const ht_subtitle_1 = "Mostly it depends on diffrent aspects."

    const rows_2 = [{
        "title": "Wall protection and different façade treatments",
        "subtitle": `Green facades do not require waterproof treatment of the wall. It is necessary to select plants with growth habits that will not damage the wall structure. Some species with irregular root systems or irregular stems will destroy the building structure over time, such as common ivy. Self-tightening rock climbers are very suitable for many vertical building surfaces and have a long service life without negatively affecting the building structure.
        Green facades support system for plants with tendrils or wound stems can be made of plastic, wood, metal or stainless steel cables or cable nets. The design of the support system must take into account the expected service life of the facade, the growth habits of the plant species, and the distance and offset from the wall.`,
        "img": <Image img={img_protection} imgAlt="Wall protection and different façade treatments" />, "isImage": "True"
    },
    {
        "title": "Soils and growing substrates",
        "subtitle": `TPlants used for facades greening can be planted in underground soil or in containers with carefully designed growth media.
        The container growth medium can support the continuous growth of plant shoots under the conditions of limited root volume and high altitude. However, weight loading restrictions may limit the depth the container system can support at high altitudes.
        In a garden environment with good soil quality and sufficient irrigation, there are few factors that hinder plant growth. When the soil structure may be poor, please consider installing "structural soil" to help plant roots develop.
        Ensure the volume of soil or growth medium can support the height required for the green facade and spread.`,
        "img": <Image img={img_soil} imgAlt="Soils and growing substrates" />, "isImage": "True"
    },
    {
        "title": "Vegetation",
        "subtitle": `In order to quickly cover the green facades, the plant specimens should be healthy, vigorous, and have many basal shoots, and should have the largest size to fit the installation.
        In order to support vegetation during installation, the growth substrate used to support the growth of the outer wall of the container should be added with controlled release fertilizer (go to Maintenance to see more) during planting. The new planting should receive irrigation suitable for the season and plant size to promote its robust growth.      
        Pruning and training of new plants is essential to promote the development of effective facades. Once the plant is established, the main runner should be trimmed to encourage lateral buds and allow the plant to grow radially. The use of diagonal cables on the facade system helps horizontal and vertical plants to increase the density of the leaves.`,
        "img": <Image img={img_vege} imgAlt="Vegetation" />, "isImage": "True"
    },
    {
        "title": " Drainage and irrigation",
        "subtitle": `For green facades, there should be a drainage system suitable for the plants used. The container system placed high in the building should have a drainage-free growth substrate to avoid waterlogging in long-term humid weather. An overflow drain hole is provided on the side of the container just above the filling height of the container. By running the runoff from the bottom of the growth vessel to the ground below, a drip tray can be installed to collect water.
        Irrigation systems are also needed. Many climbing plants require irrigation to maintain high-density leaf coverage and the long-term performance of green facades.`,
        "img": <Image img={img_drainage} imgAlt=" Drainage and irrigation" />, "isImage": "True"
    }
    ];
    const hil_imgWidth = "225px"
    const ht_title_2 = "Next Chapter"
    const ht_subtitle_2 = "How could you maintain your green infrastructures?"
    const ht_url = "/maintenance"

    return (
        <>
            <Breadcrumb parent={bc_parent} child={bc_child} />
            <HeroImageRight title={hir_title} subtitle={hir_subtitle} img={hir_image} size={hir_size} />
            <HeroText title={ht_title_1} subtitle={ht_subtitle_1} isT={true}/>
            <HeroImageLeft title={null} subtitle={null} rows={rows_2} imgWidth={hil_imgWidth} />
            <HeroText title={ht_title_2} subtitle={ht_subtitle_2} url={ht_url} isUrl={true} />
        </>
    );
}

export default Installation;