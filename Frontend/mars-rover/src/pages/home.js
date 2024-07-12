import {Link} from "react-router-dom";
import BackgroundOfTheDay from "../components/BackgroundOfTheDay";
import React from "react";

function Home() {
    return (
		<div className="App">
			<BackgroundOfTheDay/>
				<div className="Header">
					<img src={"galaxy.png"} alt="logo" className="App-logo"/>
					<h1 className="Title">Curiosity</h1>
					<div className="Buttons">
						<Link to="/apod" className="Button">
							<button className="Button">Explore the sky</button>
						</Link>
						<button className="Button">Mars</button>
						<button className="Button">EPIC</button>
					</div>
			</div>
		</div>
    );
}

export default Home;