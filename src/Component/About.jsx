import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import main_img from "./../assets/main_img.png";
import sec_img from "./../assets/sec_img.png";
import { FaSquareFacebook , FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub , FaTelegram , FaInstagram ,FaLinkedin  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const About = () => {
    const Navigate = useNavigate();
  return (
    <div
      className="about d-flex justify-content-center align-items-center"
      id="about"
    >
      <div class="container">
        <div class="row">
          <div className="left col-sm-12 col-md-5 d-flex justify-content-center align-items-center ">
            <div className="image card d-flex justify-content-center align-items-center">
              <img src={sec_img} width={250} alt="" />
            </div>
          </div>
          <div className="col-sm-11 col-md-5 right ">
                <div className="title mb-3">About Me</div>
                <div className="text first mb-3">Holding a Bachelor's degree in Computer Science with a specialization in Information Technology from Abdelhamid Mehri Constantine 2 University.</div>
                <div className="text secend mb-3">
                Passionate about full-stack web development, with a strong focus on building efficient and robust web solutions. Skilled in using React.js for dynamic and responsive front-end development and Laravel for powerful and scalable back-end solutions. Enjoys crafting seamless and innovative web applications that deliver exceptional user experiences</div>
                <div className=" d-flex justify-content-between align-item-center mb-5">
                  <div className="name ">Fekhar Mensour</div>
                  <div className="icons ">
                     <a href="https://www.instagram.com/manseurfae?utm_source=qr&igsh=MzNlNGNkZWQ4Mg%3D%3D" target="_blank"><FaInstagram  className='icon'/></a>
                     <a href="https://www.facebook.com/profile.php?id=100067150450115&mibextid=ZbWKwL" target="_blank" > <FaSquareFacebook className='icon'/></a>
                   <a href="https://www.linkedin.com/in/mensour-fekhar-75aa92237/" target="_blank" ><FaLinkedin className='icon'/></a>
                   <a href="https://github.com/Fekharmensour" target="_blank" ><FaGithub className='icon'/></a>
                   <a href="mailto:mensour.fekhar@univ-constantine2.dz" target="_blank" ><MdEmail className='icon'/></a>
                </div>
                </div>
                
                <div className="btns">
                  <a href="#contact"><button className="me-3">Hire me </button></a>
                  <button onClick={()=>window.open('/portfoliomensdev/#/preview', '_blank')} >Preview Cv</button> 
                  {/* this one i wana dispaly it anouther window in prowser */}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
