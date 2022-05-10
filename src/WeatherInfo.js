import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div>
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
            <h2>
              {Math.round(props.data.temperature)}<span className="temp-unit">°C</span>
            </h2>
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