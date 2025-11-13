import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className='container'>
        <Title subTitle="Our PROGRAM" title="What We Offer"></Title>
     <Programs></Programs>
     <About></About>
     <Title subTitle='Gallery' title='Campus Photos'></Title>
     <Campus></Campus>
     <Title subTitle='TESTIMONIALS' title='What Student Says'></Title>
     <Testimonials></Testimonials>
     <Title subTitle="Contact Us" title='Get in Touch'></Title>
     <Contact></Contact>
      </div>
    </div>
  )
}

export default App