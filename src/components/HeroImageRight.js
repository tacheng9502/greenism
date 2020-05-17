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
        const chartData = this.props.chartData;
        const chartTitle = this.props.chartTitle;
        const backgroundImage = this.props.backImage;
        const isBg = this.props.isBg;

        return (
            <section className={isBg ? "hero section has-text-white is-large" : "hero section is-medium"}  style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "100%", backgroundPosition: "right"}}>
                    <div className="container">
                        <div className="columns is-vcentered is-5-desktop">
                            <div className="column has-text-centered-touch">
                                <h1 className={isBg ? "title is-3 has-text-weight-bold has-text-white is-spaced" : "title is-3 has-text-weight-bold is-spaced"}>{title}</h1>
                                <p>{subtitle}</p>
                                {isButton === "True" &&
                                    <>
                                        <br /><br />
                                        <a href="/what" className="button is-primary is-rounded">
                                            <i className="fas fa-info-circle"></i> &nbsp;&nbsp;
                                        <p>Learn More</p>
                                        </a>
                                        <br /><br />
                                    </>
                                }
                            </div>
                            <div className="column">
                                {isChart === "True" &&
                                    <ChartLine chartData={chartData} chartTitle={chartTitle} />
                                }
                                <figure className="image">
                                    <img src={img} alt={imgAlt} style={{ maxWidth: "500px" }}></img>
                                </figure>
                            </div>
                        </div>
                    </div>
            </section>
        );
    }
}

export default HeroImageRight;