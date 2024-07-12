import {Link} from "react-router-dom";
import BackgroundOfTheDay from "../components/BackgroundOfTheDay";
import React from "react";

function Home() {
    return (
		<div className="App">
			<BackgroundOfTheDay/>
				<div className="Header">
					<img src={"galaxy.png"} alt="logo" className="App-logo"/>
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
		</div>
    );
}

export default Home;