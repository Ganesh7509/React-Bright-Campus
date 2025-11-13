import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
       <div className="hero-text">
        <h1>We deliver true education for a brighter world.</h1>
        <p>Our innovative curriculum empowers students with the knowledge, skills, and confidence to thrive in the ever-evolving world of education.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
       </div>

    </div>
  )
}

export default Hero