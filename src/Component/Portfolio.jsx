import React from "react";
import tajir_img from "./../assets/tajir.png"
import admin_img from "./../assets/admin_tajir.png"
import backend_img from "./../assets/laravel.jpg"

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div class="container">
        <div className="title mb-3">Highlighted Project</div>
        <div className="text">
          A showcase of my finest web development projects, demonstrating
          front-end and back-end expertise.
        </div>
        <div className="row mt-5">
          <div className="col-sm-6 col-md-4 col-lg-4">
            <div class="card">
              <img src={tajir_img} width={250} height={200} alt="" />
              <div class="card__content">
                <p class="card__title">Tajir Platform</p>
                <p class="card__description mb-2">
                Tajer is a robust platform we developed using React,
                 designed to facilitate seamless buying and selling of various products,
                  offering an intuitive experience for both sellers and buyers
                </p>
                <div className="more"><a href="https://github.com/Fekharmensour/tajir_e-commerc_paltform" target="_blank" >More Details</a></div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <div class="card">
              <img src={admin_img} width={250} height={200} alt="" />
              <div class="card__content">
                <p class="card__title">Tajer Dashboard</p>
                <p class="card__description mb-2">
                a powerful management tool we created using React,
                 designed specifically to oversee and control the Tajer platform,
                  ensuring smooth and efficient operations
                </p>
                <div className="more"><a href="https://github.com/Fekharmensour/tajir_admin" target="_blank" >More Details</a></div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <div class="card">
              <img src={backend_img} width={250} height={200} alt="" />
              <div class="card__content">
                <p class="card__title">RESTful API</p>
                <p class="card__description mb-2">
                The backend of the Tajer platform employs a RESTful API, developed using Laravel and MySQL,
                 to provide efficient data management and seamless communication across the platform.
                </p>
                <div className="more"><a href="https://github.com/Fekharmensour/E-commerce" target="_blank" >More Details</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
