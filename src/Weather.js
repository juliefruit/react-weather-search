import React , {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";


export default function Weather(props){
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ready:false});

  //Details from the API response & how the data is organized
  function handleResponse(response){
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  //Details to call API
  function search() {
    const apiKey = "1fad0a2b796c76984806752d55e86c73";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
  }

  //Retrieve city from user submit
  function handleSubmit(event){
    event.preventDefault();
    search(city);
  }

  //set city as searched city
function handleCityChange(event){
  setCity(event.target.value);
}

  //Display search form, current weather info & 5-day weather forecast
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
        <WeatherForecast coordinates={weatherData.coordinates}/>
      </div>
  );
  } else {
    search();
    return "Loading..."
  }

    
}