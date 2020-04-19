import React from "react";


function Card({ c1_title, c2_title, c3_title, c1_content, c2_content, c3_content, c1_img, c2_img, c3_img }) {
    return (
        <section class="hero section has-background-white-ter is-block is-relative">
            <div clas="hero-body">
                <div class="container ">
                    <div class="columns">
                        <div class="column">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-2by3">
                                        <img src={c1_img} alt="Green Roof" />
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="content">
                                        <h1 class="title is-5 has-text-weight-bold is-spaced has-text-centered">{c1_title}</h1>
                                        <p>{c1_content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-2by3">
                                        <img src={c2_img} alt="Green Wall" />
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="content">
                                        <h1 class="title is-5 has-text-weight-bold is-spaced has-text-centered">{c2_title}</h1>
                                        <p>{c2_content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="card has-background-light">
                                <div class="card-image">
                                    <figure class="image is-2by3">
                                        <img src={c3_img} alt="Green Facade" />
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="content">
                                        <h1 class="title is-5 has-text-weight-bold is-spaced has-text-centered">{c3_title}</h1>
                                        <p>{c3_content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Card;
