// Modules
import React from "react";
import { firebaseApp } from "../Login"

// Components
import Breadcrumb from "../components/Breadcrumb";
import HeroCard from "../components/HeroCard";

export default class Plants extends React.Component{

    render(){
        firebaseApp.auth().onAuthStateChanged(function (user) {
            if (!user) {
                window.location.replace("/")
            }
        });
        const bc_parent = "Recommendation Tools";
        const bc_child = "Plant Selector";

        return(
            <>
            <Breadcrumb parent={bc_parent} child={bc_child} />
            <HeroCard />
            </>
        )
    }
}