import './App.css';
import React from 'react';
import picture_of_the_day from './backend_calls.js';
import BackgroundOfTheDay from './components/BackgroundOfTheDay'

function App() {
  return (
      <div className="App">
          <BackgroundOfTheDay/>
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
