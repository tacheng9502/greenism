// Modules
import React from "react";

// Components
import HeroImageRight from "../components/HeroImageRight";
import JourneyCard from "../components/JourneyCard";
import Breadcrumb from "../components/Breadcrumb";

function How() {
    const bc_parent = "Green Roofs & Walls";
    const bc_child = "How should I start it?";
    const hir_title = "Stay tuned..."
    const hir_subtitle = "We're preparing something amazing and exiting for you."
    return(
        <>
        <Breadcrumb parent={bc_parent} child={bc_child} />
        <HeroImageRight title={hir_title} subtitle={hir_subtitle}/>
        <JourneyCard />
        </>
    );
}

export default How;