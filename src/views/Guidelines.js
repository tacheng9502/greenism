// Modules
import React from "react";

import SideMenu from "../components/SideMenu";
import Breadcrumb from "../components/Breadcrumb";
import Step from "../assets/img/steps.svg"

function Guidelines() {
    const imgWidth = "250px"
    const content =
        <div class="container">
            <div class="card">
                <header class="card-header has-background-primary">
                    <p class="card-header-title">
                        <strong class="has-text-white">Guidelines - House Owners</strong>
                    </p>
                </header>
                <div class="card-content">
                    <div class="columns is-vcentered has-text-centered-mobile">
                        <div class="column">
                            <figure class="image" style={{ width: imgWidth, margin: "30px auto" }}>
                                <img src={Step} alt="Steps" />
                            </figure>
                        </div>
                        <div class="column is-two-thirds">
                            <p>Do you own a home in an urban area? Heard about green infrastructure and interested to know more? You’ve come to the right place! Find out more about what your possible next steps could be. Click on each stage to find out more!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    return (
        <>
            <Breadcrumb parent="Guidelines" child="House Owners" />
            <SideMenu content={content} />
        </>
    );
}

export default Guidelines;