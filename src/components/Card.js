import React from "react";


function Card({ isTitle, title, subtitle, imgSize,
    c1_title, c2_title, c3_title,
    c1_content, c2_content, c3_content,
    c1_img, c2_img, c3_img }) {
    return (
        <section className="hero section has-background-white-ter is-block is-relative">
            {isTitle === "True" &&
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title is-4 has-text-weight-bold has-text-centered is-spaced">{title}</h1>
                        <p className="subtitle is-6 has-text-centered">{subtitle}</p>
                    </div>
                </div>
            }
            <div clas="hero-body">
                <div className="container ">
                    <div className="columns">
                        <div className="column">
                            <div className="card">
                                <div className="card-image">
                                    <figure className={imgSize}>
                                        <img src={c1_img} alt="Green Roof" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <h1 className="title is-5 has-text-weight-bold is-spaced has-text-centered">{c1_title}</h1>
                                        <p>{c1_content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="card-image">
                                    <figure className={imgSize}>
                                        <img src={c2_img} alt="Green Wall" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <h1 className="title is-5 has-text-weight-bold is-spaced has-text-centered">{c2_title}</h1>
                                        <p>{c2_content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="card-image">
                                    <figure className={imgSize}>
                                        <img src={c3_img} alt="Green Facade" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <h1 className="title is-5 has-text-weight-bold is-spaced has-text-centered">{c3_title}</h1>
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
