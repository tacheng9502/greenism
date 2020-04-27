// Modules
import React from "react";

import SideMenu from "../components/SideMenu";
import Breadcrumb from "../components/Breadcrumb";
import Maintanence from "../assets/img/maintenance.svg"

function Care() {
    const imgWidth = "250px"
    const content =
        <div class="container">
            <div class="card">
                <header class="card-header has-background-primary">
                    <p class="card-header-title">
                        <strong class="has-text-white">Post-Construction Care</strong>
                    </p>
                </header>
                <div class="card-content">
                    <div class="columns is-vcentered is-centered has-text-centered-mobile is-variable">
                        <div class="column">
                            <figure class="image" style={{ width: imgWidth, margin: "30px auto" }}>
                                <img src={Maintanence} alt="Maintanence"/>
                            </figure>
                        </div>
                        <div class="column is-two-thirds">
                            <p>Taking care of green infrastructure by yourself may not make it last for a very long time unless you are an expert or have received training by an expert. maintenance agreements are critical to ensure the plan’s long-term success by helping property owners understand their responsibility to maintain green infrastructure practices in working order. Best practices for maintenance agreements include specifying required activities and their frequency, inspection and reporting requirements, and necessary easements (as appropriate). Requirements to periodically renew maintenance agreements can help sustain engagement and remind homeowners of their responsibilities to maintain their systems.</p>
                            <br />
                            <p>In most cases, the companies you have collaborated with to undertake construction will also be able to provide you with maintenance agreements or will introduce you to trusted companies they work with who have proven that they will be able to maintain your green infrastructure. If you haven’t already checked out our list of some award-winning acclaimed green infrastructure construction companies, you can do so <a href="/finding">here</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    return (
        <>
            <Breadcrumb parent="Guidelines" child="Post-Construction Care" />
            <SideMenu content={content} care="is-active" />
        </>
    );
}

export default Care;