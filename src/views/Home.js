// Modules
import React from "react";

// Components
import HeroImageRight from "../components/HeroImageRight";
import JourneyCard from "../components/JourneyCard";

// Assets
import img_greenism from "../assets/img/greenism.svg"

function Home() {
    const hir_title = "A Group of People who Care for The Environment";
    const hir_subtitle = "Environmental sustainability is the basis of all Future Human goals. It requires current generations to choose how they meet their needs without compromising the ability of future generations to be able to do the same."
    return(
        <>
        <HeroImageRight title={hir_title} subtitle={hir_subtitle} img={img_greenism}/>
        <JourneyCard />
        </>
    );
}

export default Home;