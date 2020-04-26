import React from "react";
import { Bar } from "react-chartjs-2";

export default class ChartBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: this.props.chartData
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
                        text: "Mean temperature for Australia"
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