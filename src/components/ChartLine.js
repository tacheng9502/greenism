import React from "react";
import { Line } from "react-chartjs-2";

export default class ChartLine extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chartTitle: this.props.chartTitle,
            chartData: this.props.chartData,
            height: this.props.height
        };
    }
    render() {
        return (
            <div className="chart">
                <Line
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: true,
                            fontSize: 15,
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
                    height={this.state.height}
                />
            </div>
        );
    }
}