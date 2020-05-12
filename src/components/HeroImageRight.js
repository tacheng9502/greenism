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

        return (
            <section className="hero section is-medium">
                <div className="container">
                    <div className="columns is-vcentered is-5-desktop">
                        <div className="column has-text-centered-touch">
                            <h1 className="title is-3 has-text-weight-bold is-spaced">{title}</h1>
                            <p>{subtitle}</p>
                            {isButton === "True" &&
                                <>
                                    <br /><br />
                                    <a href="/what" className="button is-primary is-rounded">
                                        <i className="fas fa-info-circle"></i> &nbsp;&nbsp;
                                        <strong>Learn More</strong>
                                    </a>
                                </>
                            }
                        </div>
                        <div className="column">
                            {isChart === "True" &&
                                <ChartLine />
                            }
                            <figure className="image">
                                <img src={img} alt={imgAlt} style={{maxWidth:"500px"}}></img>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HeroImageRight;