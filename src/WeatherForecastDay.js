import React from "react";
import WeatherIcon from "./WeatherIcon"
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props){

//get max temperature
  function maxTemperature(){
  let temperature = Math.round(props.data.temp.max);
  return `${temperature}°`;
}

//get min temperature
function minTemperature(){
  let temperature = Math.round(props.data.temp.min);
  return `${temperature}°`;
}

//get date
function day() {
  let date = new Date(props.data.dt * 1000);
  let day = date.getDay();

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

//display details for forecast
  return (
    <div>
      <div className="WeatherForecastDay-day">
        {day()}
      </div>
      <div className="WeatherForecastDay-icon">
        <WeatherIcon code={props.data.weather[0].icon} size={40} />
      </div>
      <div className="WeatherForecastDay-temperature">
        <span className="WeatherForecastDay-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecastDay-temperature-min">
        {minTemperature()}
        </span>
      </div>
    </div>
  );
}