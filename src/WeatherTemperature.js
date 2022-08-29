import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div>
      <h2>
        {Math.round(props.celsius)}
        <span className="temp-unit">
          °C
        </span>
      </h2>
    </div>
  );
}