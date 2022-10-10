import React from 'react';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import './App.css';


function App() {
  return(

    <div id ="main">

      <Parallax pages={2.25}>
            <ParallaxLayer offset={0} speed={0}>
              <div id = "pl"
                style={{
                backgroundImage: `url(${require("./svg/sky.png")})`, }}
              ></div>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={0}>
              <div id = "pl"
                style={{
                backgroundImage: `url(${require("./svg/sun.png")})`, }}
              ></div>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={0.25}>
              <div id = "pl"
                style={{
                backgroundImage: `url(${require("./svg/mt1.png")})`, }}
              ></div>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={0.45}>
              <div id = "pl"
                style={{
                backgroundImage: `url(${require("./svg/mt2.png")})`, }}
              ></div>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={0.85}>
              <div id = "pl"
                style={{
                backgroundImage: `url(${require("./svg/mt3.png")})`, }}
              ></div>
            </ParallaxLayer>

            <ParallaxLayer offset ={1} speed ={0.85}>
              <div style ={{
                backgroundColor: "#4a6965",
                height:"200%",
                width: "1920px",
                margin: "auto",
                padding: "0"
              }}>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset ={0.075} speed ={-0.2}>
              <div id ="container">
                <p style ={{fontSize: "65px", color: "white", textAlign: "center"}}>Omar Natour </p>
                <a href = "https://linkedin.com/in/onatour"><img src = {require('./svg/linkedin.png')}></img></a>
		            <a href = "https://github.com/onatour"><img src = {require('./svg/github.png')}></img></a>
              </div>
            </ParallaxLayer>
      </Parallax>

    </div>

  )
}

export default App;
