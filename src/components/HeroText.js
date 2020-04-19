import React from "react";

function HeroText({ title, subtitle }) {

    return (
        <section class="has-background-success is-block is-relative">
            <div class="hero-body">
                <div class="container has-text-right">
                    <h1 class="title is-4 has-text-weight-bold is-spaced">{title}</h1>
                    <a href="/why" class="subtitle is-6 has-text-link">{subtitle}</a>
                </div>
            </div>
        </section>
    );
}

export default HeroText;