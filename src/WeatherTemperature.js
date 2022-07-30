import React, {useState} from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9/5) + 32;
  }

  if (unit === 'celsius') {
  return (
    <div>
      <h2>
        {Math.round(props.celsius)}
        <span className="temp-unit">°C | 
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </h2>
    </div>
  )
  } else {
    return (
      <div>
        <h2>
          {Math.round(fahrenheit())}
          <span className="temp-unit">
            <a href="/" onClick={showCelsius}>
              °C
            </a>
            {" "} | °F
          </span>
        </h2>
      </div>
    )
  }
}