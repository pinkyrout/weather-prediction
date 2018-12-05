import React from 'react';
import Forecast from './Forecast';
import Header from './Header';
import SummaryGraph from './SummaryGraph';

class Dashboard extends React.Component
{
  state = {
    forecasts: []
  }

  componentDidMount(){
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=Pune&appid=afb187b8da4c89148a32f68e78c27ff5", {method: "GET"})
      .then(response => {return response.json()
        console.log(response)})
      .then(data => { console.log(data)
        //debugger
        console.log("-----------------------------------")
        console.log(data.list[0].main.temp_max)
        console.log(data.list[0])
        this.setState({forecasts: data.list})
      })
  }

  getDates(data){
    let dates = []
    data.map((forecast) => {
      if (!dates.includes(this.getDate(forecast.dt_txt)))
      {
        dates.push(this.getDate(forecast.dt_txt))
      }
    })
    //debugger
    return dates;
  }

  getDate(date){
    let year = date.slice(0, 4);
    let month = date.slice(5, 7);
    let day = date.slice(8,10);

    date = day + "/" + month + "/" + year;
    return date;
  }

  getTemp(temperature){
    let temp_in_celsius = (temperature/10).toFixed(2);
    return temp_in_celsius;
  }

  getMaxTempData(){
    //debugger
    let data = this.state.forecasts;
    let maxTemps = [];
    let prevDate;
    let maxTemp;
    let perDayForecast = 0;
    data.map((forecast) => {
      let date = this.getDate(forecast.dt_txt);

      if(date === prevDate)
      {
        maxTemp = maxTemp + forecast.main.temp_max;
        perDayForecast++;
        prevDate = date;
      }
      else
      {
        if (perDayForecast !== 0)
        {
          //debugger
          maxTemps.push(this.getTemp(maxTemp/perDayForecast));
        }
        perDayForecast = 1;
        maxTemp = forecast.main.temp_max;
        prevDate = date;
      }  
    })
    maxTemps.push(this.getTemp(maxTemp/perDayForecast));
    //debugger
    return maxTemps;
  }
  
  render(){
    return(
      <div className = "container">
        <Header/>
        <div className = "row">{
          this.state.forecasts.map((forecast) => {
            //debugger
            return(
              <Forecast
                key = {forecast.dt}
                date_time = {forecast.dt_txt}
                max_temp  = {forecast.main.temp_max}
                min_temp  = {forecast.main.temp_min}
              />
            )
          })
        }</div>
        <SummaryGraph 
          dates = {this.getDates(this.state.forecasts)}
          maxTemp = {this.getMaxTempData()}
        />
      </div>
    )
  }
}

export default Dashboard;