import React from 'react'
import hero from '../image/about.jpg'
import c1 from '../image/c1.jpg'
import c2 from '../image/c2.jpg'
import c3 from '../image/c3.jpg'
import "./About.css"
export default function About() {
  return (
    <div>
     <h2 className='a-head'> About us</h2>
     <h2 className='a-head1'> WELCOME TO CAKEZONE</h2>

     <div className="section">
      {/* First div with an image */}
      <div className="image-container">
        <img
          src={hero}
          alt="hero"
          className="responsive-image"
        />
      </div>

      {/* Second div with a short message and two sub-divs */}
      <div className="content">
        <div className='content'>
        <h2>Discover Our World</h2>
        <p>
          Explore the beauty of our reality with our immersive experiences. From breathtaking landscapes to
          fascinating cityscapes, we bring the world to your fingertips.
        </p>
        <div className="flex-container">
          <div className="reality-box">
            <h3>100% Reality</h3>
            <p>Experience the world in its truest form with our state-of-the-art technology.</p>
          </div>
          <div className="gradient-box">
            <h3>Infinite Possibilities</h3>
            <p>Unlock endless possibilities with our diverse range of experiences.</p>
          </div>
        </div>
        </div>
        <h2>Popular products</h2>
        <div className='fle'>
          <div className='cab'>
            <img src={c1} alt=' candy' className='candy' height={50}/>
            <h3>Cansey</h3>
          </div>
          <div className='cab'>
            <img src={c2} alt=' candy' className='candy' height={50}/>
            <h3>M&M</h3>
          </div>
          <div className='cab'>
            <img src={c3} alt=' candy' className='candy' height={50}/>
            <h3>Valia</h3>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
