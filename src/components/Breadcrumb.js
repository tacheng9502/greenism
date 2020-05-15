import React from "react";

function Breadcrumb({ parent, child }) {
    return (
        <section className="section hero is-primary">
            <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li><a className="has-text-white" href="/">Home</a></li>
                    <li><a className="has-text-white" href="#">{parent}</a></li>
                    <li><a className="has-text-white" href="#">{child}</a></li>
                </ul>
            </nav>
        </section>
    );
}

export default Breadcrumb;