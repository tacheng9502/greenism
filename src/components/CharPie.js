import React from "react";
import { Pie } from "react-chartjs-2";

export default class ChartPie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: this.props.chartData,
            chartTitle: this.props.chartTitle
        }
    }
    render() {
        return (
            <Pie
                data={this.state.chartData}
                options={{
                    cutoutPercentage: 50,
                    title: {
                        display: true,
                        fontSize: 14,
                        fontFamily: "Nunito",
                        text: this.state.chartTitle
                    },
                    legend: {
                        position: "right",
                        labels: {
                            fontFamily: "Nunito"
                        }
                    },
                    tooltips: {
                        titleFontFamily: "Nunito",
                        bodyFontFamily: "Nunito"
                    }
                }}
            />
        );
    }
}