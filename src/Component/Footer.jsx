import React from 'react'
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub, FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div className='footer'>
      <div class="container">
        <div className="title">MensourDev</div>
        <div className="icons ">
          <a href="https://www.instagram.com/manseurfae?utm_source=qr&igsh=MzNlNGNkZWQ4Mg%3D%3D" target="_blank"><FaInstagram className='icon' /></a>
          <a href="https://www.facebook.com/profile.php?id=100067150450115&mibextid=ZbWKwL" target="_blank" > <FaSquareFacebook className='icon' /></a>
          <a href="https://www.linkedin.com/in/mensour-fekhar-75aa92237/" target="_blank" ><FaLinkedin className='icon' /></a>
          <a href="https://github.com/Fekharmensour" target="_blank" ><FaGithub className='icon' /></a>
          <a href="mailto:fekharmensour@gmail.com" target="_blank" ><MdEmail className='icon' /></a>
          <a href="https://api.whatsapp.com/send?phone=213665001345&text=Hello%20Mensour%2C%20I%20hope%20you%27re%20doing%20well.%20I%E2%80%99d%20like%20to%20get%20in%20touch%20with%20you." target="_blank"><FaWhatsapp className='icon' /></a>
        </div>
        <div className="phone-number my-2" style={{ textAlign: 'center', fontSize: '14px', marginTop: '10px' }}>
          WhatsApp: <a href="https://api.whatsapp.com/send?phone=213665001345&text=Hello%20Mensour%2C%20Are%20you%20available%20for%20a%20quick%20discussion%20about%20upcoming%20opportunities%3F" target="_blank" style={{ color: '#FECD78', textDecoration: 'none' }}>+213 665 001 345</a>
        </div>
        <div className='copy'>Created by me &copy; September 2024 - <span>Algeria . Ghardaia</span></div>
      </div>
    </div>
  )
}

export default Footer
