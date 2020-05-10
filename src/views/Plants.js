// Modules
import React from "react";

// Components
import Breadcrumb from "../components/Breadcrumb";
import HeroCard from "../components/HeroCard";

export default class Plants extends React.Component{

    render(){
        const bc_parent = "Interactive Tools";
        const bc_child = "Plant Selector";

        return(
            <>
            <Breadcrumb parent={bc_parent} child={bc_child} />
            <HeroCard />
            </>
        )
    }
}