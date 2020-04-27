import React from "react";
import { Bar } from "react-chartjs-2";

export default class ChartBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: this.props.chartData,
            chartTitle: this.props.chartTitle
        }
    }
    render() {
        return (
            <Bar
                data={this.state.chartData}
                options={{
                    title: {
                        display: true,
                        fontSize: 14,
                        fontFamily: "Nunito",
                        text: this.state.chartTitle
                    },
                    legend: {
                        position: "bottom",
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