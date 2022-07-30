import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

 
export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="col-6">
        <h1>
          {props.data.city}
        </h1>
        <h3>
          <FormattedDate date={props.data.date} />
        </h3>
        <img
        src={props.data.iconUrl}
        alt={props.data.description} />
        <p className="text-capitalize">
          {props.data.description}
        </p>
        <hr />
        <p>
          Display Temperature in Fahrenheit
        </p>
      </div>
      
      <div className="col-6">
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