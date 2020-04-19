import React from "react";

function HeroImageRight({ title, subtitle, img, imgAlt}) {

    return (
        <section class="hero section is-block is-relative">
            <div class="container">
                <div class="columns is-vcentered is-5-desktop">
                    <div class="column has-text-centered-touch">
                        <h1 class="title is-2 has-text-weight-bold is-spaced">{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                    <div class="column">
                        <figure class="image">
                            <img src={img} alt={imgAlt}></img>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroImageRight;