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
          </a>, is open sourced on {" "}
        <a href='https://github.com/juliefruit/react-weather-search' target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          , and hosted on {" "}
          <a href='https://zesty-stardust-83af10.netlify.app/' target="_blank" rel="noopener noreferrer">
            Netlify
            </a>
      </footer>
    </div>
  );
}
