import React from 'react'
import Appbar from './component/Appbar'
import Landing from './Component/Landing' 
import About from './Component/About'
import Services from './Component/Services'
import Skills from './Component/Skills'
import Portfolio from './Component/Portfolio'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
const Home = () => {
  return (
    <>
       <Appbar/>
       <Landing/>
       <About/>
       <Services/>
       <Skills/>
       <Portfolio/>
       <Contact/>
       <Footer/>
    </>
  )
}

export default Home
