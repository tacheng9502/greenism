import React from "react";
import { Line } from "react-chartjs-2";

export default class ChartLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ["1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999",
                    "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009",
                    "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
                datasets: [
                    {
                        label: "Annual Mean Temperature (°C)",
                        data: [
                            0.47, 0.59, 0.12, 0.3, 0.18, 0.16, 0.59, 0.3, 0.96, 0.31,
                            -0.04, 0.04, 0.71, 0.69, 0.53, 1.15, 0.5, 0.75, 0.45, 0.92, 0.33,
                            0, 0.24, 1.33, 1.03, 0.95, 1, 1.09, 1.14, 1.52
                        ],
                        pointBackgroundColor: 'rgba(255, 99, 132, 0.6)',
                        borderColor: 'rgba(255, 99, 132, 0.6)',
                        pointHoverBackgroundColor: 'rgba(26, 147, 111, 0.6)',
                        fill: false
                    }
                ]
            }
        }
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
                            text: "Mean temperature for Australia (1990-2019)"
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
            </div>
        );
    }
}