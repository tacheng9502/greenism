import React from "react";

function HeroFooter({ title, subtitle, url }) {

    return (
        <section class="hero is-primary is-bold is-vcentered">
            <div class="hero-body">
                <div class="container has-text-centered ">
                    <h1 class="title is-4 has-text-weight-bold is-spaced has-text-white">{title}</h1>
                    <a href={url} class="subtitle is-6">{subtitle}</a>
                </div>
            </div>
        </section>
    );
}

export default HeroFooter;