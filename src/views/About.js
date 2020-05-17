// Modules
import React from "react";

// Components
import Breadcrumb from "../components/Breadcrumb";
import HeroImageRight from "../components/HeroImageRight";
import HeroImageLeft from "../components/HeroImageLeft";
import Image from "../components/Image";

// Assets
import hir_image from "../assets/img/aboutus.png";
import img_backgroud from "../assets/img/backgroud.png";
import img_vision from "../assets/img/vision.png";
import img_thank from "../assets/img/thank.png";

function About() {
    const bc_parent = "About"
    //const bc_child = "About"
    const hir_title = `About the Greenism`
    const hir_subtitle = `Greenism is our team name and also our 
    project name. It means that we are a group of people who are 
    concerned about the environment and believe that make our world 
    green is the best solution for climate change.`
    
    const rows = [{
        "title": "Backgroud",
        "subtitle": `As of 2013, more than 40% of the average electricity used in buildings 
        in Australia is used for cooling purposes and 61% of the electricity generated is by 
        burning coal which will have a drastic impact on the environment due to the emission 
        of greenhouse gases. Many initiatives have been introduced by the government like Take2, 
        Cooling our City etc to help reduce the drastic impacts of climate change, however very 
        few have taken up the initiative mainly due to lack of proper resources. Green roofs, walls 
        and facades can be constructed on buildings in urban areas as they come with a wide variety 
        of benefits like cooling the interior and exteriors of the building, reducing flash flooding etc.`,
        "img": <Image img={img_backgroud} imgAlt="Backgroud" />, "isImage": "True"
    },
    {
        "title": "Our vision",
        "subtitle": `As of 2019, Melbourne CBD has only about 40 green roofs which is mainly since there 
        are very little resources about the creation, management and maintenance of these types of 
        infrastructure. What we at Greenism aim to do is to build a platform to introduce green roofs 
        to people who are keen to learn more about it and also provide any and all information related 
        to green infrastructure. The application will also contain an interactive tool which can help 
        users do the cost-benefit analysis, find out if their house or building is suitable to retrofit 
        a green roof or wall and has a wide range of local services like specialists, architects and 
        construction companies.`,
        "img": <Image img={img_vision} imgAlt="Our vision" />, "isImage": "True"
    },
    {
        "title": "Acknowledgement",
        "subtitle": `We would like to express our deepest appreciation to City of Melbourne. City of Melbourne 
        provides a lot of information and guidelines that we needed including the open datasets about plants. 
        A special thanks go to our studio mentors and industry mentors who help us to give suggestions about our 
        project. `,
        "img": <Image img={img_thank} imgAlt="Acknowledgement" />, "isImage": "True"
    },
    ]

    return (
        <>
            <Breadcrumb parent={bc_parent} child={null}/>
            <HeroImageRight title={hir_title} subtitle={hir_subtitle} img={hir_image} />
            <HeroImageLeft title={null} subtitle={null} rows={rows} imgWidth="225px" />
        </>
    );
}

export default About;