// Modules
import React from "react";

// Components
import Breadcrumb from "../components/Breadcrumb";
import HeroImageRight from "../components/HeroImageRight";
import HeroImageLeft from "../components/HeroImageLeft";
import HeroText from "../components/HeroText";
import Card from "../components/Card";
import Image from "../components/Image";

// Assets
import hir_image from "../assets/img/analysis.png";
import img_climate from "../assets/img/climate.png";
import img_weightload from "../assets/img/weightload.png";
import img_structure from "../assets/img/structure.png";
import img_access from "../assets/img/access.png";
import img_nearbyvegetation from "../assets/img/nearbyvegetation.png";
import img_rain from "../assets/img/rain.png";
import img_wind from "../assets/img/wind.png";
import img_solar from "../assets/img/solar.png";


function Siteanalysis() {
    const bc_parent = "Self-Planting Guidelines"
    const bc_child = "Site Analysis"
    const hir_title = `The importance of site analysis?`
    const hir_subtitle = `Before designing a green wall or facade it is important to understand the characteristics of the site, as these factors will influence the feasibility and cost. This chapter explains how to evaluate a proposed location for a green wall or facade. It is written for situations where there is an existing building on-site, however, it can be adapted by those planning to construct a new building.`
    const hif_title = "How to do the site analysis?";
    const hif_subtitle = "You may need to consider 5 aspects."
    const rows = [{"title": "Climatic factors on-site",
                   "subtitle": `Climatic factors will vary with the geographic location as well as with the site aspect 
                   and height and even from the effects of surrounding buildings. It is important to understand the likely 
                   climate onsite in order to inform decisions about which plant species are suitable for the site. Usually,
                   the best approach is to estimate the worst-case scenario for plant growth that is likely on-site,
                   and design with that in mind.`,
                   "img": <Image img={img_climate} imgAlt="Climatic factors on-site"/>, "isImage":"True"},
                   {"title": "Weight loading",
                   "subtitle": `The load-bearing capacity of a building must be known before planning a green wall 
                   or facade. A structural engineer’s advice is essential to ensure comprehensive design development, based 
                   on the building’s construction, condition and weight loading capacity. It is important to consider not 
                   just the weight of plants when planted but their weight at maturity. The weight of saturated plants and 
                   substrate must also be included in the load assessment. Some example weight loadings of plants are 
                   provided below..`,
                   "img": <Image img={img_weightload} imgAlt="Weight loading"/>, "isImage":"True"},
                   {"title": "Existing structure and size",
                   "subtitle": `Consider the quality of the vertical surface – Is it currently waterproofed? Does the wall have a surface that needs protection from vegetation?
                   Assess the area available – bearing in mind that costs increase with size. The useable area can be diminished if there are many windows on a wall.
                   Water collection and storage opportunities - is there space to store water on-site? Tanks are usually located at ground level or in the basement of a building, and an irrigation tank may be colocated or shared with tanks for toilet flushing. Water storage can also be built into the design of some green wall systems.`,
                   "img": <Image img={img_structure} imgAlt="Existing structure and size"/>, "isImage":"True"},
                   {"title": "Access",
                   "subtitle": `Evaluation of the site should review accessibility. Temporary access will be needed for machinery and delivery and storage of materials during construction. For multi-storey wall and facade greening, this might involve a crane to lift materials onto the site. Access for maintenance to walls and facades can also be considered from below, in which case space for a temporary elevated work platform is likely to be required. Access for passers-by must also be considered, as there are regulations against vegetation that protrudes onto public space, and even in the private realm, it is important to be aware of hazards that can be created for people using the space nearby.`,
                   "img": <Image img={img_access} imgAlt="Access"/>, "isImage":"True"},
                   {"title": "Nearby vegetation",
                   "subtitle": `The local vegetation adjoining a site can influence design. If the creation of habitat for biodiversity is the desired outcome for your green wall or facade, consideration of the surrounding landscape could be useful. However, nearby vegetation can also be a source of weeds or contribute to a fire risk and should be included in site analysis.`,
                   "img": <Image img={img_nearbyvegetation} imgAlt="Nearby vegetation"/>, "isImage":"True"},
    ];
    const card_title = ["Wind", "Rainfall and irrigation", "Solar radiation"]
    const card_content = [`It is necessary to understand the likely wind load that a green wall or facade will be subjected to so that it can be built to withstand the forces. Wind at high elevation will also influence temperature, and wind has a direct dehydrating effect on vegetation, therefore influencing species selection and irrigation requirements.`,
                          `Rainfall in Melbourne is generally not sufficient to support a green wall or facade throughout the year. It is important to establish whether rainwater or another water source can be harvested from other areas on-site and stored to supply an irrigation system. This will avoid or minimise the need to use potable water for irrigation.`,
                          `There are some walls that may receive significantly less solar radiation, due to intense shading by nearby buildings. Shadowing and shading analysis can be used to assess areas of light and shade on a site and possible changes over the year (for example, at the equinox) and over time (for example, adjoining new building development).`]              
    //  const rows = [{"title": "Weight loading",
    //                "subtitle": `The load-bearing capacity of a building must be known before planning a green roof, wall 
    //                or facade. A structural engineer’s advice is essential to ensure comprehensive design development, based 
    //                on the building’s construction, condition and weight loading capacity. It is important to consider not 
    //                just the weight of plants when planted but their weight at maturity. The weight of saturated plants and 
    //                substrate must also be included in the load assessment. Some example weight loadings of plants are 
    //                provided below..`,
    //                "img": <Image img={img_weightload} imgAlt="Weight loading"/>, "isImage":"True"},
    //                {"title": "Existing structure and size",
    //                "subtitle": `Consider the quality of the roof or vertical surface – Is it currently waterproofed? Does the wall have a surface that needs protection from vegetation?
    //                Assess the area available – bearing in mind that costs increase with size. The useable area can be diminished if there are many windows on a wall or numerous vents and equipment on a roof.
    //                Water collection and storage opportunities - is there space to store water on-site? Tanks are usually located at ground level or in the basement of a building, and an irrigation tank may be colocated or shared with tanks for toilet flushing. Water storage can also be built into the design of some green wall systems.`,
    //                "img": <Image img={img_structure} imgAlt="Existing structure and size"/>, "isImage":"True"},
    //                {"title": "Access",
    //                "subtitle": `Evaluation of the site should review accessibility. Temporary access will be needed for machinery and delivery and storage of materials during construction. For green roofs or multi-storey wall and facade greening, this might involve a crane to lift materials onto the site. Access for maintenance to walls and facades can also be considered from below, in which case space for a temporary elevated work platform is likely to be required. Access for passers-by must also be considered, as there are regulations against vegetation that protrudes onto public space, and even in the private realm, it is important to be aware of hazards that can be created for people using the space nearby.`,
    //                "img": <Image img={img_access} imgAlt="Access"/>, "isImage":"True"},
    //                {"title": "Nearby vegetation",
    //                "subtitle": `The local vegetation adjoining a site can influence design. If the creation of habitat for biodiversity is the desired outcome for your green roof, wall or facade, consideration of the surrounding landscape could be useful. However, nearby vegetation can also be a source of weeds or contribute to a fire risk and should be included in site analysis.`,
    //                "img": <Image img={img_nearbyvegetation} imgAlt="Nearby vegetation"/>, "isImage":"True"},
    // ];
    const ht_title = "Next Chapter"
    const ht_subtitle = "How to design and planning green infrastructures?"
    const ht_url = "/designplanning"

    return (
        <>
            <Breadcrumb parent={bc_parent} child={bc_child} />
            <HeroImageRight title={hir_title} subtitle={hir_subtitle} img={hir_image} size="is-medium"/>
            <Card c1_title={card_title[0]} c1_content={card_content[0]} c1_img={img_wind}
                c2_title={card_title[1]} c2_content={card_content[1]} c2_img={img_rain}
                c3_title={card_title[2]} c3_content={card_content[2]} c3_img={img_solar} />
            <HeroImageLeft title={hif_title} subtitle={hif_subtitle} rows={rows} imgWidth="225px" />
            <HeroText title={ht_title} subtitle={ht_subtitle} url={ht_url} isUrl={true}/>
        </>
    );
}

export default Siteanalysis;