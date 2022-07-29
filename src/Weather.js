import React , {useState} from "react";

import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";


export default function Weather(props){
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ready:false});

  function handleResponse(response){
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "1fad0a2b796c76984806752d55e86c73";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
    search(city);
  }

function handleCityChange(event){
  setCity(event.target.value);
}

  if (weatherData.ready)  {
    return(
      <div className="Weather">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div>
              <input
              type="submit"
              value="Search"
              className="btn btn-primary"/>
            </div>
        </form>
        <WeatherInfo data={weatherData}/>
      </div>
  );
  } else {
    search();
    return "Loading..."
  }

    
}