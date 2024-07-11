import './App.css';
import React from 'react';

function App() {
  return (
      <div className="App">
        <img src={"https://apod.nasa.gov/apod/image/2407/NGC5139_Stein_a2048.jpg"} alt="background-image"
             className="Background-image"/>

        <div className="Header">
          <img src={"./galaxy.png"} alt="logo"
               className="App-logo"/>
          <h1 className="Title">Curiosity</h1>
        </div>
      </div>
  );
}

function onButtonClick() {
  alert('Button clicked!');
}

export default App;
