import React from 'react'
import Contact from './Contact'
import Projects from './Projects'
import Header from './Header'
import About from './About'
import Achievements from './Achievements'
import Footer from './Footer'
import Hero from "./Hero";
const Landing = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Achievements/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Landing
