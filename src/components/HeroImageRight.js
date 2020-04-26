import React from "react";
import ChartLine from "./ChartLine";

class HeroImageRight extends React.Component {
    render() {
        const title = this.props.title;
        const subtitle = this.props.subtitle;
        const img = this.props.img;
        const imgAlt = this.props.imgAlt;
        const isButton = this.props.isButton;
        const isChart = this.props.isChart;
        const size = "hero section is-block is-relative " + this.props.size;

        return (
            <section class={size}>
                <div class="container">
                    <div class="columns is-vcentered is-5-desktop">
                        <div class="column has-text-centered-touch">
                            <h1 class="title is-3 has-text-weight-bold is-spaced">{title}</h1>
                            <p>{subtitle}</p>
                            {isButton === "True" &&
                                <>
                                    <br /><br />
                                    <a class="button is-primary is-rounded">
                                        <strong>Share with someone</strong>
                                    </a>
                                </>
                            }
                        </div>
                        <div class="column">
                            {isChart === "True" &&
                                <ChartLine />
                            }
                            <figure class="image">
                                <img src={img} alt={imgAlt}></img>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HeroImageRight;