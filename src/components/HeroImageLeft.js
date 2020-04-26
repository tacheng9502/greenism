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
            <section class="hero section is-block is-relative">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title is-4 has-text-weight-bold has-text-centered is-spaced">{title}</h1>
                        <p class="subtitle is-6 has-text-centered">{subtitle}</p>
                        {rows.map((item, key) =>
                            <div key={key} class="columns is-vcentered is-7 has-text-centered-mobile">
                                <div class="column">
                                    {item.isImage === "True" &&
                                        <figure class="image" style={{ width: imgWidth, margin: "30px auto" }}>
                                            {item.img}
                                        </figure>
                                    }
                                    {item.isChartPie === "True" &&
                                        <figure class="image" style={{ width: imgWidth, margin: "30px auto" }}>
                                            <ChartPie chartData={item.chartData} chartTitle={item.chartTitle} />
                                        </figure>
                                    }
                                    {item.isChartBar === "True" &&
                                        <figure class="image" style={{ width: imgWidth, margin: "30px auto" }}>
                                            <ChartBar chartData={item.chartData} chartTitle={item.chartTitle} />
                                        </figure>
                                    }
                                </div>
                                <div class="column is-two-thirds">
                                    <h3 class="title has-text-weight-bold is-5">{item.title}</h3>
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