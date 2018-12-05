import React from 'react';
import {Line} from 'react-chartjs-2';

class SummaryGraph extends React.Component
{
  componentWillReceiveProps(){
    //debugger
    console.log("=======================")
    console.log(this.props.dates)
  }
  render(){
    //debugger
    const dates = this.props.dates;

    const data = {
      labels:  this.props.dates,
      datasets: [
        {
          label: 'Max Temp',
          data: [29, 31, 32, 28, 30, 32],
          fill: false,
          lineTension: 0.4,
          backgroundColor: '#e28974',
          borderColor: '#e28974',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#ffc107',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#e22909',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10
        },
        {
          label: "Min Temp",
          data: [23, 22, 21, 24, 21, 22],
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#ffc107',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10
        }
      ]
    };
    return(
      <div className = "graph">
        <h6>Graph</h6>
        <Line
          data = {data}
        />
      </div>
    )
  }
}

export default SummaryGraph;