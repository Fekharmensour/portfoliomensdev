import React from 'react'
import Appbar from './Component/Appbar'
import Landing from './Component/Landing'
import About from './Component/About'
import Services from './Component/Services'
import Skills from './Component/Skills'
import Portfolio from './Component/Portfolio'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import Comments from './Component/Comments'
const Home = () => {
  return (
    <>
      <Appbar />
      <Landing />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Comments />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
