import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about'>
    <div className="about-left">
        <img src={about_img} alt=""  className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' />
    </div>
<div className="about-right">
<h3>ABOUT BRIGHTCAMPUS</h3>
<h2>Nurturing Tomorrow's Leaders Today </h2>
<p>Begin a transformative learning journey with BrightCampus, where education meets innovation. Our modern curriculum equips students with the skills, knowledge, and real-world experience needed to thrive in today’s evolving world.</p>
  
  <p>Through creativity, practical learning, and dedicated mentorship, we prepare learners to become changemakers — ready to inspire progress in classrooms, industries, and communities.</p>
  
  <p>Whether you aim to become an educator, innovator, or leader, BrightCampus offers the perfect environment to achieve your ambitions and shape a brighter future for all.</p>

</div>

    </div>
  )
}

export default About