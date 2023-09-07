import React from 'react'
import Contact from './Contact'
import Projects from './Projects'
import Header from './Header'
import About from './About'
import Achievements from './Achievements'
const Landing = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Projects/>
      <Achievements/>
      <Contact/>
    </div>
  )
}

export default Landing
