// Modules
import React from "react";

// Components
import Breadcrumb from "../components/Breadcrumb";

export default class Plants extends React.Component{

    render(){
        const bc_parent = "Interactive Tools";
        const bc_child = "Plant Selector";

        return(
            <>
            <Breadcrumb parent={bc_parent} child={bc_child} />
            </>
        )
    }
}