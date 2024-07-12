import React, {useEffect, useRef, useState} from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import {Link} from "react-router-dom";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {Mars_Rover_Pictures} from "../backendCalls";

function Mars() {
    const sliderRef = useRef(null);
    const scrollAmount = 100; // The amount to scroll when clicking the navigation buttons
    const [images, setImages] = useState([]);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        Mars_Rover_Pictures(date).then(response => {
			setImages(getPicsFromJson(response))
		});

        console.log(images)
    }, [date]);

    const handleClick = (value) => {
        setDate(value)
    }

  return (
      <div className="App">
          <img src={"mars-rover.jpg"} alt="background"
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
              <text className="MarsTitle">What was the Mars Rover doing on that day? <br/> 🤔 </text>
          </div>

          <div className="Calendar">
              <Calendar className="darkmode" onChange={handleClick}/>
          </div>

          <div className="AppScroll">
              {/* Left navigation button */}
              <button
                    className="nav-btn"
                    onClick={() => {
                      const container = sliderRef.current;
                      container.scrollLeft -= scrollAmount; // Scroll left by the specified amount
                    }}
              >
                <ChevronLeft />
              </button>
                {/* Image container */}
              <div className="images-container" ref={sliderRef}>
                {images.map((image) => {
                  return (
                    <img
                      className="image"
                      alt="sliderImage"
                      key={image?.id}
                      src={image?.url}
                    />
                  );
                })}
              </div>
                 {/* Right navigation button */}
              <button
                className="nav-btn"
                onClick={() => {
                  const container = sliderRef.current;
                  container.scrollLeft += scrollAmount; // Scroll right by the specified amount
                }}
              >
                <ChevronRight />
              </button>
          </div>
      </div>
  );
}

export default Mars;

function getPicsFromJson(json) {
    console.log(json)
    if (!json) {
        console.log("nu exista json, am iesit")
        return [];
    }
    else {
        console.log("exista json, raman")
        console.log(Object.keys(json.photos).length)
        const images = [];

        for (let i = 0; i < Object.keys(json.photos).length; ++i) {
            let obj = json.photos[i];
            console.log(obj);

            images.push({id: i, url: obj.img_src});
        }

        console.log(images);

        return images;
    }
}