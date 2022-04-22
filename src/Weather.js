import React , {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ready:false});

  function handleResponse(response){
    console.log(response.data);
    
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Monday, April 11, 2022 | 18:30",
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
              <h1>
                {weatherData.city}
              </h1>
              <h3>
                {weatherData.date}
              </h3>
              <img
              src={weatherData.iconUrl}
              alt={weatherData.description} />
              <p className="text-capitalize">
                {weatherData.description}
              </p>
              <hr />
              <p>
                Display Temperature in Fahrenheit
              </p>
          </div>
          <div className="col-6">
            <h2>
              {Math.round(weatherData.temperature)}<span className="temp-unit">°C</span>
            </h2>
            <ul>
              <li>
                Humidity: {Math.round(weatherData.humidity)}%
              </li>
              <li>
                Wind: {Math.round(weatherData.wind)}km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "1fad0a2b796c76984806752d55e86c73";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
    return "Loading..."
  }

    
}