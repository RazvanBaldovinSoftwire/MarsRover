import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Apod from "./pages/apod"
import Home from "./pages/home"

function App() {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route exact path={"/"} element={<Home/>}/>
                <Route exact path={"/apod"} element={<Apod/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
