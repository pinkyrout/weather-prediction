import React from 'react';
import Forecast from './Forecast.jsx';

class Dashboard extends React.Component
{
  state = {
    forecasts: []
  }

  componentDidMount(){
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=afb187b8da4c89148a32f68e78c27ff5", {method: "GET"})
      .then(response => {return response.json()
      	console.log(response)})
      .then(data => { console.log(data)
        console.log("==============================")
        console.log(data.list[0].main.temp_max)
        console.log(data.list[0])
        this.setState({forecasts: data.list})
      })
  }
  
  render(){
    return(
      <ul className= 'list-group'>{
        this.state.forecasts.map((forecast) => {
          //debugger
          return(
            <Forecast
              date_time = {forecast.dt_txt}
              max_temp  = {forecast.main.temp_max}
              min_temp  = {forecast.main.temp_min}
            />
          )
        })
      }</ul>
    )
  }
}

export default Dashboard;