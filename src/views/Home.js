// Modules
import React from "react";

// Components
import HeroImageRight from "../components/HeroImageRight";
import HeroText from "../components/HeroText";
import HomeFeature from "../components/HomeFeature";
import HomeFeatureCard from "../components/HomeFeatureCard"

// Assets
import img_home from "../assets/img/home.jpg"

function Home() {
    const hir_title = "People thrive when nature thrives";
    const hir_subtitle = "We at Greenism offer you the opportunity to learn everything there is to know about green infrastructure and how it could be a turning-point in the way your lifestyle impacts you and the environment."
    const hir_isButton = "True"
    const ht_title = "We're here to support";
    const ht_subtitle = "Take on a journey to learn, analyse and action with us."

    return (
        <>
            <HeroImageRight title={hir_title} subtitle={hir_subtitle} backImage={img_home} isButton={hir_isButton} isBg={true} />
            <HeroText title={ht_title} subtitle={ht_subtitle} isT={true} isSteps={true} />
            <HomeFeature />
            <HomeFeatureCard />
        </>
    );
}

export default Home;