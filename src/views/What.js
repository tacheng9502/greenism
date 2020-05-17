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
import hir_image from "../assets/img/green_roof_illustration.svg";
import img_greenRoof from "../assets/img/green_roof.png";
import img_greenWall from "../assets/img/green_wall.png";
import img_greenFacade from "../assets/img/green_facade.png";
import img_value from "../assets/img/value.svg";
import img_raining from "../assets/img/raining.svg";
import img_reflection from "../assets/img/reflection.svg";
import img_city from "../assets/img/city.svg";
import img_bird from "../assets/img/bird.svg";
import img_park from "../assets/img/park.svg";
import img_air from "../assets/img/air.svg";

function What() {
    const bc_parent = "Green Roofs & Walls"
    const bc_child = "What are Green Roofs & Walls"
    const hir_title = `Thinking about greening your property?`
    const hir_subtitle = `Green roofs, walls and facades enhance our region, creating sustainable and lush social and leisure environments. They help cool hot cities, reduce storm water drainage and insulate buildings all year round.`
    const card_title = ["Green Roof", "Green Walls", "Green Facade"]
    const card_content = [`A vegetated landscape built up from a series of layers that are
    installed on a roof surface as ‘loose laid’ or modular (that is, installed
    layer by layer on the roof or as pre-prepared layers in trays).`,
        `A green wall is comprised of plants grown in supported vertical
    systems that are generally attached to an internal or external wall,
    although in some cases can be freestanding.`,
        `A green facade is created by growing climbing plants up and across
    the facade of a building, either from plants grown in garden beds
    at its base, or by container planting installed at different levels.`]
    const hif_title = "Benefits of Green Spaces";
    const hif_subtitle = "There is a range of benefits, outlined below, that can potentially be provided by Green Spaces."
    const rows = [{
        "title": "Increased property value and other benefits for building owners",
        "subtitle": `Building owners and developers are increasingly installing green roofs, walls or facades to add a
                   point of difference, increase commercial returns, provide visual appeal and turn a building into a
                   local landmark. Most building owners in Melbourne ignore the potential of large, leasable spaces
                   on rooftops that can be transformed into versatile recreation, amenity or productive facilities, or
                   commercial spaces for bars, restaurants or cafés.`,
        "img": <Image img={img_value} imgAlt="Increased property value and other benefits for building owners" />, "isImage": "True"
    },
    {
        "title": "Stormwater management",
        "subtitle": `Green roofs absorb and retain rainwater and can be used to manage stormwater run-off in
                   urban environments. They can also filter particulates and pollutants. Stormwater run-off can be
                   reduced or slowed because it is stored in the substrate, used by or stored in the foliage, stems
                   and roots of plants, and also evaporates directly from the substrate. Additional water storage
                   capacity in green roof systems can be provided through incorporation of a water retentive layer
                   or drainage layer at the base of the green roof.`,
        "img": <Image img={img_raining} imgAlt="Stormwater management" />, "isImage": "True"
    },
    {
        "title": "Cooling a city – urban heat island effect",
        "subtitle": `Hard surfaces in urban environments, such as concrete, brick, glass, asphalt and roofing, have a high thermal mass, collecting the sun’s heat during the day and re-radiating it slowly back into the atmosphere. This contributes to a rise in ambient temperature in cities, creating large, stable masses of hot air (urban heat islands), especially during periods of calm, still weather. When green wall and facade plants are grown on a support system that leaves a gap between the wall and the planting, hot air moves up by convection through the space between the wall and the vegetation, providing passive cooling.`,
        "img": <Image img={img_city} imgAlt="Cooling a city – urban heat island effect" />, "isImage": "True"
    },
    {
        "title": "Aesthetics, open space and urban food production",
        "subtitle": `Green roofs, walls and facades can increase amenity and provide opportunities for food production, recreation, relaxation or commercial ventures. In inner-city areas especially, most space is occupied by buildings and related infrastructure and the opportunities for new parks and gardens is extremely limited. Green roofs, walls and facades can be used for multi-level greenery designs that connect with ground level green spaces.`,
        "img": <Image img={img_park} imgAlt="Aesthetics, open space and urban food production" />, "isImage": "True"
    },
    {
        "title": "Creation & preservation of habitat & ecological biodiversity",
        "subtitle": `Green roofs can contribute to and enhance biodiversity by providing new urban habitats and
                   specific habitats for rare or important species of plants or animals. Green roofs can also provide
                   a link or corridor across urban ‘ecological deserts’ and assist in migration of invertebrates and birds.
                   Designing for biodiversity requires consideration early in concept development with regard to
                   plant species, food sources, habitat values, access points and building heights.`,
        "img": <Image img={img_bird} imgAlt="Creation & preservation of habitat & ecological biodiversity" />, "isImage": "True"
    },
    {
        "title": "Improved thermal performance",
        "subtitle": `A significant benefit of green roofs, walls and facades is the potential for reducing building
                   heating and cooling requirements. Green walls and facades can reduce heat gain in summer
                   by directly shading the building surface. Green roofs reduce heat transfer through the roof and
                   ambient temperatures on the roof surface, improving the performance of heating, ventilation
                   and air conditioning (HVAC) systems.`,
        "img": <Image img={img_reflection} imgAlt="Improved thermal performance" />, "isImage": "True"
    },
    {
        "title": "Cleaning the air",
        "subtitle": `Green roofs, walls and facades can contribute to the removal of gaseous pollutants from the air, although their effectiveness varies with plant species and area of cover. On a larger scale, green roofs, walls and facades can help to reduce overall environmental heat gain (re-radiation of heat from building materials with high thermal mass), in turn improving air quality as less photochemical pollutants are produced at lower air temperatures. In interior environments, plants have been shown to have a significant capacity to reduce volatile organic compounds from the air.`,
        "img": <Image img={img_air} imgAlt="Cleaning the air" />, "isImage": "True"
    }
    ];
    const ht_title = "Next Chapter"
    const ht_subtitle = "Why is this important to me?"
    const ht_url = "/why"

    return (
        <>
            <Breadcrumb parent={bc_parent} child={bc_child} />
            <HeroImageRight title={hir_title} subtitle={hir_subtitle} img={hir_image} />
            <Card c1_title={card_title[0]} c1_content={card_content[0]} c1_img={img_greenRoof}
                c2_title={card_title[1]} c2_content={card_content[1]} c2_img={img_greenWall}
                c3_title={card_title[2]} c3_content={card_content[2]} c3_img={img_greenFacade} />
            <HeroImageLeft title={hif_title} subtitle={hif_subtitle} rows={rows} imgWidth="225px" />
            <HeroText title={ht_title} subtitle={ht_subtitle} url={ht_url} isUrl={true} />
        </>
    );
}

export default What;