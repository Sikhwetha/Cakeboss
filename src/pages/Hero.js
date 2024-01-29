import React from 'react'
import "./Hero.css"
import hero from "../image/hero.jpg"
function Hero() {
  return (
    <div className="container">
      {/* First div */}
      <div className="contents">
        <h3 style={{color:'wheat'}}>Super Crespy</h3>
        <h1>CAKEZONE</h1>
        <h2 className='h-head'>THE BEST LOCAL CAKE </h2>

        <button className='btn'>Best...</button>
      </div>

      {/* Second div */}
      <div className="image-container">
        <img
          src={hero}
          alt="Cake "
          className="responsive-image"
        />
      </div>
    </div>
  )
}

export default Hero
