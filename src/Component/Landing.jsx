import React, { useState } from 'react'
import { Typewriter } from "react-simple-typewriter";
import main_img from './../assets/main_img.png';
import { FaSquareFacebook , FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub , FaTelegram , FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";
const Landing = () => {
    const array = [
        " Web Devloper",
        " Front End  Devloper",
        " Back End Devloper",
        " Full Stack Devloper",
    ];
    
    
  return (
    <div className='landing d-flex justify-content-center align-items-center' id='landing'>
      <div class="container">
        <div class="row d-flex justify-content-between  align-items-center">
            <div class="col-sm-12 col-md-6 left"  >
                <div className="title">Hello</div>
                <div className="head">
                    I'm <span>Mensour</span> , <br /> I'm a Freelance <Typewriter
                  className=""
                  words={array}
                  loop={50}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
                </div>
                <div className="desc">
                Experienced Software Engineer and Web Developer specializing in full-stack development
                with React.js for the front end and Laravel for the back end. If you need a complete web solution,
                feel free to reach out to me!
                </div>
                <div className="button">
                    <Link to="contact"><button >Let's Talk </button></Link>
                </div>
                
            </div>
            <div class="right col-6   d-flex  justify-content-end align-items-center">
                <img src={main_img} width={320} alt="" />
            </div>
            <div className="down"></div>
        </div>
      </div>
    </div>
  )
}

export default Landing
