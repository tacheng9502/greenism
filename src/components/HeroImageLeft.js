import React from "react";
import ChartPie from "./CharPie";
import ChartBar from "./ChartBar";

class HeroImageLeft extends React.Component {

    render() {
        let title = this.props.title;
        let subtitle = this.props.subtitle;
        let rows = this.props.rows;
        let imgWidth = this.props.imgWidth;

        return (
            <section className="hero section is-block is-relative">
                <div className="hero-body">
                    <div className="container">
                        {title != null &&
                            <h1 className="title is-4 has-text-weight-bold has-text-centered is-spaced">{title}</h1>
                        }
                        {subtitle != null &&
                            <p className="subtitle is-6 has-text-centered">{subtitle}</p>
                        }
                        {rows.map((item, key) =>
                            <div key={key} className="columns is-vcentered is-7 has-text-centered-mobile">
                                <div className="column">
                                    {item.isImage === "True" &&
                                        <figure className="image" style={{ width: imgWidth, margin: "30px auto" }}>
                                            {item.img}
                                        </figure>
                                    }
                                    {item.isChartPie === "True" &&
                                        <figure className="image" style={{ width: item.imgWidth, margin: "30px auto" }}>
                                            <ChartPie chartData={item.chartData} chartTitle={item.chartTitle} />
                                        </figure>
                                    }
                                    {item.isChartBar === "True" &&
                                        <figure className="image" style={{ width: item.imgWidth, margin: "30px auto" }}>
                                            <ChartBar chartData={item.chartData} chartTitle={item.chartTitle} />
                                        </figure>
                                    }
                                </div>
                                <div className="column is-two-thirds">
                                    <h3 className="title has-text-weight-bold is-5">{item.title}</h3>
                                    <p>{item.subtitle}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    };
}

export default HeroImageLeft;