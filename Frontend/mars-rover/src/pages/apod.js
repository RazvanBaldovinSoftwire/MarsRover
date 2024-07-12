import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import {Link, useNavigate} from "react-router-dom"

function Apod() {
    const navigate = useNavigate()

    const handleClick = (value) => {
        navigate(`/?date=${value}`)
    }

  return (
      <div className="App">
          <img src={"night_sky.png"} alt="background"
               className="Background-image"/>
          <div className="Header">
              <img src={"galaxy.png"} alt="logo"
                       className="App-logo"/>
              <Link to="/" className="Title">
                <h1 className="Title">Curiosity</h1>
              </Link>
              <div className="Buttons">
                  <Link to="/apod" className="Button">
                      <button className="Button">Explore the sky</button>
                  </Link>
                  <Link to="/mars" className="Button">
                      <button className="Button">Mars Rover</button>
                  </Link>
                  <button className="Button">EPIC</button>
              </div>
          </div>

          <div className="ApodTitleContainer">
              <text className="ApodTitle">See the Universe as it was on your special day</text>
          </div>

          <div className="Calendar">
              <Calendar className="lightmode" onChange={handleClick}/>
          </div>
      </div>
  );
}

export default Apod;
