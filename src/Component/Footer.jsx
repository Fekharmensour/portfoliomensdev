import React from 'react'
import { FaSquareFacebook , FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub , FaTelegram , FaInstagram ,FaLinkedin  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div className='footer'>
      <div class="container">
        <div className="title">MensourDev</div>
        <div className="icons ">
        <a href="https://www.instagram.com/manseurfae?utm_source=qr&igsh=MzNlNGNkZWQ4Mg%3D%3D" target="_blank"><FaInstagram  className='icon'/></a>
                     <a href="https://www.facebook.com/profile.php?id=100067150450115&mibextid=ZbWKwL" target="_blank" > <FaSquareFacebook className='icon'/></a>
                   <a href="https://www.linkedin.com/in/mensour-fekhar-75aa92237/" target="_blank" ><FaLinkedin className='icon'/></a>
                   <a href="https://github.com/Fekharmensour" target="_blank" ><FaGithub className='icon'/></a>
                   <a href="mailto:mensour.fekhar@univ-constantine2.dz" target="_blank" ><MdEmail className='icon'/></a>
                </div>
      <div className='copy'>Created by me &copy; September 2024 - <span>Algeria . Ghardaia</span></div> 
      </div>
    </div>
  )
}

export default Footer
