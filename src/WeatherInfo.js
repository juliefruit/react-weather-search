import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

 
export default function WeatherInfo(props) {
//Weather data
  return (
    <div className="row">
      <div className="col-5">
        <h1>
          {props.data.city}
        </h1>
        <h3>
          <FormattedDate date={props.data.date} />
        </h3>
        <p className="text-capitalize">
          {props.data.description}
        </p>
        <WeatherIcon code={props.data.icon} size={80}/>
      </div>
      
      <div className="col">
        <WeatherTemperature celsius={props.data.temperature} />
        <ul>
          <li>
            Humidity: {Math.round(props.data.humidity)}%
          </li>
          <li>
            Wind: {Math.round(props.data.wind)}km/h
          </li>
        </ul>
      </div>
      </div>
  );
}