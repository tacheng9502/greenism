// Modules
import React from "react";

import SideMenu from "../components/SideMenu";
import Breadcrumb from "../components/Breadcrumb";
import bulmaCollapsible from '@creativebulma/bulma-collapsible';


export default class Evaluating extends React.Component {
    componentDidMount() {
        this.collapsibles = bulmaCollapsible.attach(".is-collapsible", {
            container: this.refs.collapsibles
        });
    }

    render() {

        const rows = [{
            key: "collapsible-card-1", url: "#collapsible-card-1",
            title: "Do green roofs work on new and old buildings?",
            content: `Yes. Green roofs can be fitted to a range
            of roof types. A new building can be
            constructed to accommodate the weight
            loading necessary for a green roof. Some
            existing buildings will have the capacity
            to support a green roof, or additional
            structural support can be retrofitted to
            support the required increase in loading.
            A structural engineer must be engaged
            to clarify details of building structure and
            weight loading capacity.`
        }, {
            key: "collapsible-card-2", url: "#collapsible-card-2",
            title: "Can I green any building?",
            content: `Most building surfaces have the potential
            for greening. Challenging sites such as
            those in deep shade or with low weightloading
            capacity, and tall buildings or sites
            with limited access, require specialist
            engineering, design and technical input.`
        }, {
            key: "collapsible-card-3", url: "#collapsible-card-3",
            title: "Will the green roof leak and cause problems?",
            content: `Any roof has the potential to leak.
            Well-constructed green roofs, walls
            and facades will not leak or cause other
            structural damage to the building. Correct
            installation of waterproofing is essential on
            roofs and some walls, and leak detection
            systems can minimise risks on green roofs.
            Waterproofing membranes can actually
            last much longer under green roofs because
            they are protected from damage by the
            elements by overlying layers.`
        }, {
            key: "collapsible-card-4", url: "#collapsible-card-4",
            title: "Can I have solar panels on a green roof?",
            content: `Yes. There are examples of green roofs in
            Melbourne and other parts of the world
            where green roofs have solar panels
            installed above them.`
        }, {
            key: "collapsible-card-5", url: "#collapsible-card-5",
            title: "What is the typical lifespan of a green roof, wall or facade?",
            content: `The lifespan is directly related to the
            quality of the design, construction and
            maintenance, and in particular, the
            longevity of the system components.
            Some green roofs in Europe have been
            in place for more than 75 years and are
            still performing strongly. There are many
            examples of direct façade greening in
            Melbourne that have lasted for decades.
            The projected lifespan of green wall and
            facade technologies that are more recent
            entries into the market are less well
            understood.`
        }
        ]
        const content =
            <>
                <div className="container is-block is-relative">
                    <h1 className="title has-text-weight-bold has-text-centered">Frequently Asked Questions</h1>
                    <br />

                    <div ref="collapsibles" id="accordion">
                        {rows.map((item) =>
                            <>
                                <div className="card">
                                    <header class="card-header has-background-primary">
                                        <p class="card-header-title has-text-white">
                                            {item.title}
                                        </p>
                                        <a href={item.url} data-action="collapse" class="card-header-icon is-hidden-fullscreen" aria-label="more options">
                                            <span class="icon has-text-white">
                                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                                            </span>
                                        </a>
                                    </header>
                                    <div id={item.key} class="is-collapsible">
                                        <div class="card-content">
                                            <p>
                                                {item.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <br />
                            </>
                        )}
                    </div>
                </div>
            </>
        return (
            <>
                <Breadcrumb parent="Guidelines" child="Frequently Asked Questions" />
                <SideMenu content={content} evaluating="is-active" />
            </>
        )
    }
}