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
          label: 'Weather Forecast',
          data: this.props.maxTemp,
        }
      ]
    };
    return(
      <div>
        <h6>Graph</h6>
        <Line
          data = {data}
        />
      </div>
    )
  }
}

export default SummaryGraph;