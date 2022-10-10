import React from 'react';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import './App.css';


function App() {
  return(
    <div id ="main">

      <Parallax pages={2}>
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

            <ParallaxLayer offset={0} speed={0.75}>
              <div id = "pl"
                style={{
                backgroundImage: `url(${require("./svg/mt3.png")})`, }}
              ></div>
            </ParallaxLayer>
            
            <ParallaxLayer Layer offset ={0.05} speed ={-0.35}>
              <div>
                <p style ={{fontSize: "45px", color: "white", textAlign: "center", }}>Omar Natour </p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer Layer offset ={1.15}>
              <div style ={{
                backgroundColor: "#4a6965",
                height:"1500px",
                width: "1920px",
                margin: "auto",
                padding: "0"
              }}>
              </div>
            </ParallaxLayer>
            
      </Parallax>

    </div>
  )
}

export default App;
