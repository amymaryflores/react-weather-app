import React from 'react';
import Weather from "./Weather"
import './App.css';

export default function App() {
  return ( 
  <div className="App">
  <div className="container">
  <Weather defaultCity="Worcester" />
  <footer>
  This project was coded by Amy Flores and is {" "}
  <a href="https://github.com/amymaryflores/react-weather-app"
  target="_blank"
   rel="noopener noreferrer"
  >
open-source on GitHub
  </a>{" "}
  and{" "}
  <a href="https://dainty-snickerdoodle-fbc3bb.netlify.app"
  target="_blank"
   rel="noopener noreferrer"
   >
     hosted on Netlify
   </a>
  </footer>
  </div>
  </div>
  );
}
