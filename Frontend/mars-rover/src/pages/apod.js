import React, {useContext, useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import {Link, useNavigate} from "react-router-dom"

function Apod() {
    const [date, setDate] = useState(new Date())
    const navigate = useNavigate()

    const handleClick = (value) => {
        setDate(value)
        navigate(`/?date=${value}`)
    }

  return (
      <div className="App">
          <img src={"night_sky.png"} alt="background"
               className="Background-image"/>
          <div className="Header">
              <img src={"galaxy.png"} alt="logo"
                   className="App-logo"/>
              <h1 className="Title">Curiosity</h1>
              <div className="Buttons">
                  <Link to="/apod" className="Button">
                      <button className="Button">Explore the sky</button>
                  </Link>
                  <button className="Button">Mars</button>
                  <button className="Button">EPIC</button>
              </div>
          </div>

          <div className="ApodTitleContainer">
              <text className="ApodTitle">See the Universe as it was on your special day</text>
          </div>

          <div className="Calendar">
              <Calendar className="darkmode" onChange={handleClick}/>
          </div>
      </div>
  );
}

export default Apod;
