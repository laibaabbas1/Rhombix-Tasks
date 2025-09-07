import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Headline from './components/Headline/Headline'
import Services from './components/Services/Services'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'
import Skills from './components/Skills/Skills'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Headline />
      <Services />
      <AboutMe />
      <Projects />
      <Headline />
      <Education />
      <Skills />
      <ContactMe />
      <Headline />
      <Footer />
    </div>
  )
}

export default App