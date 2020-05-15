// Modules
import React from "react";

// Components
import HeroImageRight from "../components/HeroImageRight";

// Assets
import img_building from "../assets/img/build.svg"

function Building() {
    const hir_title = "Stay tuned..."
    const hir_subtitle = "We're preparing something amazing and exiting for you."
    return(
        <HeroImageRight title={hir_title} subtitle={hir_subtitle} img={img_building} size="is-medium"/>
    );
}

export default Building;