import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css"
import axios from "axios";

export default function WeatherForecast(props) {

//useState for code to run only when the API is called 
  let [loaded, setLoaded] = useState(false);
//useState for forecast data to be set upon API call  
  let [forecast, setForecast] = useState(null);

//useEffect for forecast temperatures to change upon city search
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates])

  function handleResponse(response){
    setForecast(response.data.daily);
    console.log(response.data.daily);
    setLoaded(true);
  }

//Display daily weather stats
  if (loaded) {
    return(
      <div className="WeatherForecast">
        <div className="row">
{/*looping through the daily forecast for the next 5 days*/}
          {forecast.map(function(dailyForecast, index) {
            if (index < 5){
          return(
            <div className="col" key={index}>
            <WeatherForecastDay data={dailyForecast} />
          </div>
          );
        }
      })}

        </div>
      </div>
    ); 
  } else {
      let apiKey = "1fad0a2b796c76984806752d55e86c73";
      let latitude = props.coordinates.lat;
      let longitude = props.coordinates.lon;
      let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then(handleResponse);

      return null;
  }
}