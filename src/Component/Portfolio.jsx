import React from "react";
import { projects } from "../Data/Projects";
import { Link, useNavigate } from "react-router-dom";


const Portfolio = () => {
  const Navigate = useNavigate();
  
  return (
    <div className="portfolio" id="portfolio">
      <div className="container mt-5">
        <div className="title mb-3">Highlighted Projects</div>
        <div className="text">
          A showcase of my finest web development projects, demonstrating
          front-end and back-end expertise.
        </div>
        <div className="row mt-5">
          {projects.map((project) => (
            <div className="col-sm-6 col-md-4 col-lg-4 mb-4" key={project.id}>
              <div className="card ">
                <img src={project.image} className="card-img-top" alt={project.title} height={200} />
                <div className="card__content" 
                onClick={() => Navigate('/project/'+project.id) }
                >
                  <p className="card__title">{project.title}</p>
                  <p className="ccard__description mb-2">{project.second_title}</p>
                  <div className="more">
                  <Link to={`project/${project.id}`}>View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;




// const projects = [
//   {
//     title: "Tajir Platform",
//     description:
//       "Tajer is a robust platform we developed using React, designed to facilitate seamless buying and selling of various products, offering an intuitive experience for both sellers and buyers.",
//     image: tajir_img,
//     link: "https://github.com/Fekharmensour/tajir_e-commerc_paltform",
//   },
//   {
//     title: "Tajer Dashboard",
//     description:
//       "A powerful management tool we created using React, designed specifically to oversee and control the Tajer platform, ensuring smooth and efficient operations.",
//     image: admin_img,
//     link: "https://github.com/Fekharmensour/tajir_admin",
//   },
//   {
//     title: "RESTful API",
//     description:
//       "The backend of the Tajer platform employs a RESTful API, developed using Laravel and MySQL, to provide efficient data management and seamless communication across the platform.",
//     image: backend_img,
//     link: "https://github.com/Fekharmensour/E-commerce",
//   },
// ];