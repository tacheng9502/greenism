// Modules
import React from "react";
import { firebaseApp } from "../Login"

// Components
import Breadcrumb from "../components/Breadcrumb";
import HeroImageRight from "../components/HeroImageRight";
import HeroImageLeft from "../components/HeroImageLeft";
import HeroText from "../components/HeroText";
import Card from "../components/Card";
import Image from "../components/Image";
import Lefttitle from "../components/Lefttitle";

// Assets
import img_analysis from "../assets/img/analysis.png";
import img_climate from "../assets/img/climate.png";
import img_weightload from "../assets/img/weightload.png";
import img_structure from "../assets/img/structure.png";
import img_access from "../assets/img/access.png";
import img_nearbyvegetation from "../assets/img/nearbyvegetation.png";
import img_rain from "../assets/img/rain.png";
import img_wind from "../assets/img/wind.png";
import img_solar from "../assets/img/solar.png";


function SiteAnalysis() {
    firebaseApp.auth().onAuthStateChanged(function (user) {
        if (!user) {
            window.location.replace("/")
        }
    });
    const bc_parent = "DIY Planting Guidelines";
    const bc_child = "Understand your space";

    const hir_title = `The importance of understanding your space`
    const hir_subtitle = `Before designing a green facade it is important to understand the characteristics of the site, as these factors will influence the feasibility and cost. This chapter explains how to evaluate a proposed location for a green facade. It is written for situations where there is an existing building on-site, however, it can be adapted by those planning to construct a new building.`;
    const hir_image = img_analysis;
    const hir_size = "is_medium";
    const t_1 = "1. Climate factors on-site";
    const t_2 = "2. Weight loading";
    const t_3 = "3. Existing structure and size";
    const t_4 = "4. Access";
    const t_5 = "5. Nearby vegetation";


    const card_title = ["Wind", "Rainfall and irrigation", "Solar radiation"]
    const card_content = [`It is necessary to understand the likely wind load that a green facade will be subjected to so that it can be built to withstand the forces. Wind at high elevation will also influence temperature, and wind has a direct dehydrating effect on vegetation, therefore influencing species selection and irrigation requirements.`,
        `Rainfall in Melbourne is generally not sufficient to support a green facade throughout the year. It is important to establish whether rainwater or another water source can be harvested from other areas on-site and stored to supply an irrigation system. This will avoid or minimise the need to use potable water for irrigation.`,
        `There are some facades that may receive significantly less solar radiation, due to intense shading by nearby buildings. Shadowing and shading analysis can be used to assess areas of light and shade on a site and possible changes over the year (for example, at the equinox) and over time (for example, adjoining new building development).`]

    const hil_rows_1 = [{
        "title": "Understand the climate around your space",
        "subtitle": `Climatic factors will vary with the geographic location as well as with the site aspect and 
        height and even from the effects of surrounding buildings. It is important to understand the likely 
        climate onsite in order to inform decisions about which plant species are suitable for the site. Usually, 
        the best approach is to estimate the worst-case scenario for plant growth that is likely on-site, and design 
        with that in mind.` + "\r" +
        `Some climate factors showed below.`,
        "img": <Image img={img_climate} imgAlt="Climatic factors on-site" />, "isImage": "True"
    }
    ];
    const hil_rows_2 = [{
        "title": "Understand the load-bearing capacity of your space",
        "subtitle": `The load-bearing capacity of a building must be known before planning a green facade. A structural 
                   engineer’s advice is essential to ensure comprehensive design development, based 
                   on the building’s construction, condition and weight loading capacity. It is important to consider not 
                   just the weight of plants when planted but their weight at maturity. The weight of saturated plants and 
                   substrate must also be included in the load assessment. Some example weight loadings of plants are 
                   provided below.`,
        "img": <Image img={img_weightload} imgAlt="Weight loading" />, "isImage": "True"
    }
    ];
    const hil_rows_3 = [{
        "title": "Understand the quality of the vertical surface",
        "subtitle": `Consider the quality of the vertical surface – Is it currently waterproofed? Does the wall have a surface that needs protection from vegetation?
                   Assess the area available – bearing in mind that costs increase with size. The useable area can be diminished if there are many windows on a wall.
                   Water collection and storage opportunities - is there space to store water on-site? Tanks are usually located at ground level or in the basement of a building, and an irrigation tank may be colocated or shared with tanks for toilet flushing. Water storage can also be built into the design of some green systems.`,
        "img": <Image img={img_structure} imgAlt="Existing structure and size" />, "isImage": "True"
    }
    ];
    const hil_rows_4 = [{
        "title": "Understand the accessibility of your space",
        "subtitle": `Evaluation of the site should review accessibility. Temporary access will be needed for machinery and delivery and storage of materials during construction. For multi-storey facade greening, this might involve a crane to lift materials onto the site. Access for maintenance to facades can also be considered from below, in which case space for a temporary elevated work platform is likely to be required. Access for passers-by must also be considered, as there are regulations against vegetation that protrudes onto public space, and even in the private realm, it is important to be aware of hazards that can be created for people using the space nearby.`,
        "img": <Image img={img_access} imgAlt="Access" />, "isImage": "True"
    }
    ];
    const hil_rows_5 = [{
        "title": "Understand the creation of habitat around your space",
        "subtitle": `The local vegetation adjoining a site can influence design. If the creation of habitat for biodiversity is the desired outcome for your green facade, consideration of the surrounding landscape could be useful. However, nearby vegetation can also be a source of weeds or contribute to a fire risk and should be included in site analysis.`,
        "img": <Image img={img_nearbyvegetation} imgAlt="Nearby vegetation" />, "isImage": "True"
    }
    ];
    const hil_imgWidth = "225px"
    const c_imgSize = "image is-4by3"

    const ht_title_1 = "How could you analyse your site for building green facade?";
    const ht_subtitle_1 = "You may need to consider 5 aspects."
    const ht_title_2 = "Next Chapter"
    const ht_subtitle_2 = "How to design and plan your green facade?"
    const ht_url = "/design"

    return (
        <>
            <Breadcrumb parent={bc_parent} child={bc_child} />
            <HeroImageRight title={hir_title} subtitle={hir_subtitle} img={hir_image} size={hir_size} />
            <HeroText title={ht_title_1} subtitle={ht_subtitle_1} isT={true}/>            
            <Lefttitle title={t_1} subtitle={null} rows={hil_rows_1} imgWidth={hil_imgWidth} />
            <Card imgSize={c_imgSize}
                c1_title={card_title[0]} c1_content={card_content[0]} c1_img={img_wind}
                c2_title={card_title[1]} c2_content={card_content[1]} c2_img={img_rain}
                c3_title={card_title[2]} c3_content={card_content[2]} c3_img={img_solar} />
            <Lefttitle title={t_2} subtitle={null} rows={hil_rows_2} imgWidth={hil_imgWidth} />
            <Lefttitle title={t_3} subtitle={null} rows={hil_rows_3} imgWidth={hil_imgWidth} />
            <Lefttitle title={t_4} subtitle={null} rows={hil_rows_4} imgWidth={hil_imgWidth} />
            <Lefttitle title={t_5} subtitle={null} rows={hil_rows_5} imgWidth={hil_imgWidth} />
            <HeroText title={ht_title_2} subtitle={ht_subtitle_2} url={ht_url} isUrl={true} />
        </>
    );
}

export default SiteAnalysis;