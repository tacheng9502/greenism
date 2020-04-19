import React from "react";

function Breadcrumb({ parent, child }) {
    return (
        <section class="section hero has-background-success">
            <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li><a href="/greenism">Home</a></li>
                    <li class="is-active"><a>{parent}</a></li>
                    <li class="is-active"><a>{child}</a></li>
                </ul>
            </nav>
        </section>
    );
}

export default Breadcrumb;