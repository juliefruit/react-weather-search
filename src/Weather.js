import React , {useState} from "react";

import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";


export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ready:false});

  function handleResponse(response){
    console.log(response.data);
    
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    })
  }

  if (weatherData.ready)  {
    return(
      <div className="Weather text-formatting">
        <div className="row">
          <div className="col-6 city-column">
              <form>
                <div className="row">
                  <div className="col-9">
                    <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on"/>
                  </div>
                  <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary"/>
                  </div>
                </div>
              </form>
              <WeatherInfo data={WeatherData}/>
        </div>
      </div>
    );
  } else {
    let apiKey = "1fad0a2b796c76984806752d55e86c73";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
    return "Loading..."
  }

    
}