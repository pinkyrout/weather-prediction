import React from 'react';

class Forecast extends React.Component
{
  getDate(date){
    let year = date.slice(0, 4);
    let month = date.slice(5, 7);
    let day = date.slice(8,10);

    date = day + "/" + month + "/" + year;
    return date;
  }

  getTime(date_time){
  	let time = date_time.slice(11,20);
  	return time;
  }

  getTemp(temperature){
    let temp_in_celsius = (temperature/10).toFixed(2);
    return temp_in_celsius;
  }

  render(){
    return( 
      <div className = "weather-card">
        <h6 className = "date">Date {this.getDate(this.props.date_time)}</h6>
        <h6 className = "date">Time {this.getTime(this.props.date_time)}</h6>
        <h6 className = "max-temperature">Max Temp: {this.getTemp(this.props.max_temp)} Celsius</h6>
        <h6 className = "min-temperature">Min Temp: {this.getTemp(this.props.min_temp)} Celsius</h6>
      </div>      
    )
  }
}

export default Forecast;