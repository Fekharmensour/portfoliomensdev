import React, { useEffect, useState } from "react";
import emailjs from 'emailjs-com';
import { Toaster, toast } from 'alert';

const Contact = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_angzesf', 'template_ah9615g', formData, 'rnKPFPYATHx18ELAW')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Message sent successfully!');
        setFormData({ username: '', email: '',message: '' });
      }, (err) => {
        console.log('FAILED...', err);
        toast.error('Failed to send message. Please try again.');
      });
  };
  return (
    <div className='contact' id='contact'>
       <Toaster width={150}  position='top-center'/>
      <div class="container ">
      <div className="title mb-3">Contact Us</div>
        <div className="text mb-3">
        Reach out to us today—let's build something amazing together!
        </div>
      <div className="content ">
          <form onSubmit={handleSubmit}>
            <div className="group row mb-0  d-flex justify-content-center align-item-center">
            <div className="form-group col-sm-12 col-md-6 ">
                <input 
                  type="text" 
                  id="username" 
                  name="username" 
                  placeholder="Enter your username ..." 
                  value={formData.username}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group col-sm-12 col-md-6">
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Enter your email ..." 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
              
              <div className="form-group">
                <textarea 
                  name="message" 
                  id="message" 
                  placeholder="Enter your message ..."
                  value={formData.message}
                  onChange={handleChange}
                  required 
                ></textarea>
              </div>
              <div className="btns">
                <button type="submit" className="talk">Contact Us</button>
              </div>
            </form>

            {/* <div className="logos">
              <a href="mailto:mensour.fekhar@univ-constantine2.dz "> <img src={mail} alt="" /> </a>
              <a href="https://www.linkedin.com/in/mensour-fekhar-75aa92237/"> <img src={linkedin} alt="" /> </a>
              <a href="https://www.instagram.com/manseurfae?utm_source=qr&igsh=MzNlNGNkZWQ4Mg%3D%3D"> <img src={instagram} alt="" /> </a>
              <a href="https://www.facebook.com/profile.php?id=100067150450115&mibextid=ZbWKwL"> <img src={facebook} alt="" /> </a>
              <a href="https://x.com/fekhar_mensour"> <img src={twitter} alt="" /> </a>
            </div> */}
          </div>
      </div>
    </div>
  )
}

export default Contact
