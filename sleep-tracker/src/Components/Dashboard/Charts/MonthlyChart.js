import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import withWidth from "@material-ui/core/withWidth";
import { blue } from "@material-ui/core/colors";

const daysInMonth = (month, year) => {
  const num = new Date(year, month, 0).getDate();

  let array = [];

  for (let i = 1; i < num + 1; i++) {
    array.push(i);
  }
  return array;
};

class MonthlyChart extends Component {
  state = {
    chartData: {
      label: "Day Of Month",
      labels: this.props.days,
      datasets: [
        {
          label: "Hours Slept",
          data: this.props.hours,
          backgroundColor: "rgba(33, 150, 243, 0.25)",
          borderColor: blue[500],
          lineTension: 0.2
        }
      ]
    }
  };

  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <Line
        data={this.state.chartData}
        height={400}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Hours Slept This Month",
            fontSize: this.props.width === "xs" ? 12 : 18,
            fontColor: "#E6E6E6"
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

export default withWidth()(MonthlyChart);
