// Modules
import React from "react";

// Components
import HeroImageRight from "../components/HeroImageRight";
import HeroText from "../components/HeroText";
import Wave from "../components/Wave";
import Feature from "../components/Feature";
import JourneyCard from "../components/JourneyCard"

// Assets
import img_greenism from "../assets/img/greenism.svg";
import img_wave from "../assets/img/wave.svg";
import img_owners from "../assets/img/owners.jpg";
import img_business from "../assets/img/business.jpg";
import img_buyers from "../assets/img/buyers.jpg";

function Home() {
    const hir_title = "An initiative by people who care for the environment (like you!)";
    const hir_subtitle = "Establishing green roofs & walls across communities is a great way to help the environment and reduce building operating costs, while also improving our health and wellbeing."
    const hir_size = "is-medium"
    const hir_isButton = "True"
    const ht_title = "We're here to support";
    const ht_subtitle = "Take on a journey to learn, analyse and action."
    return (
        <>
            <HeroImageRight title={hir_title} subtitle={hir_subtitle} img={img_greenism} isButton={hir_isButton} size={hir_size}/>
            <Wave position={"bottom"} img={img_wave} />
            <HeroText title={ht_title} subtitle={ht_subtitle} />
            <Feature />
            <JourneyCard title="Interactive Tools" title1={"User Guidlines"} img1={img_owners} img2={img_buyers} img3={img_business}/>
        </>
    );
}

export default Home;