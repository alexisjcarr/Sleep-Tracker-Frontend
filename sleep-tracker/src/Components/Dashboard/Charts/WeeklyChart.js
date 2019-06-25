import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import chartColors from "./chartColors";
import withWidth from "@material-ui/core/withWidth";

import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen
} from "@material-ui/core/colors";

class WeeklyChart extends Component {
  state = {
    chartData: {
      labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Hours Slept",
          data: [7, 5, 9, 6, 6, 5, 8],
          borderColor: green[700],
          fill: false
        }
      ]
    }
  };
  render() {
    return (
      <Line
        data={this.state.chartData}
        height={400}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Hours Slept Per Day",
            fontSize: this.props.width === "xs" ? 12 : 18
          },

          legend: { display: false },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }}
      />
    );
  }
}

export default withWidth()(WeeklyChart);
