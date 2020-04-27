import React from "react";

function Breadcrumb({ parent, child }) {
    return (
        <section className="section hero is-success">
            <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li className="is-active"><a>{parent}</a></li>
                    <li className="is-active"><a>{child}</a></li>
                </ul>
            </nav>
        </section>
    );
}

export default Breadcrumb;