import React from 'react';
import './App.css';
import Weather from './Weather';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Vancouver"/>
      <footer>
        This project was coded by {" "}
        <a href='https://www.instagram.com/juliefruit_/' target="_blank" rel="noopener noreferrer">
          Julie Wright
          </a> & is{" "}
        <a href='https://github.com/juliefruit/react-weather-search' target="_blank" rel="noopener noreferrer">
            open sourced on GitHub!
          </a>
      </footer>
    </div>
  );
}
