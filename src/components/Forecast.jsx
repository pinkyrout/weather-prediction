import React from 'react';

class Forecast extends React.Component
{
  render(){
    return(
      <div className = "col-md-6 card">
        <div id = 'forecast'>
          <li className = 'list-group-item'>Date {this.props.date_time}</li>
          <li className = 'list-group-item'>Max Temp: {this.props.max_temp} Farenhite</li>
          <li className = 'list-group-item'>Min Temp: {this.props.min_temp} Farenhite</li>
        </div>
      </div>
    )
  }
}

export default Forecast;