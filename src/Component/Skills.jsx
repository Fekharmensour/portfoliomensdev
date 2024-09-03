import React, { useState } from "react";
import html_img from "./../assets/html.png";
import css_img from "./../assets/css.png";
import bootsrap_img from "./../assets/bootsrap.png";
import js_img from "./../assets/js.png";
import php_img from "./../assets/php.png";
import laravel_img from "./../assets/laravel.png";
import py_img from "./../assets/python.png";
import mysql_img from "./../assets/mysql.png";
import react_img from "./../assets/react.png";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const skillsData = [
  { name: "HTML", width: "95%", image: html_img },
  { name: "CSS", width: "90%", image: css_img },
  { name: "Bootsrap", width: "80%", image: bootsrap_img },
  { name: "JavaScript", width: "85%", image: js_img },
  { name: "React Js", width: "90%", image: react_img },
  { name: "Php", width: "88%", image: php_img },
  { name: "Laravel", width: "79%", image: laravel_img },
  { name: "Python", width: "65%", image: py_img },
  { name: "MySql", width: "85%", image: mysql_img },
];

const Skill = ({ name, width, image, animate }) => {
  const widthValue = parseInt(width);

  return (
    <div className="col-sm-6 col-md-4 col-lg-4 skill" data-width={width}>
      <div className="info">
        <div className="text">
          <img src={image} alt={name} className="me-2" width={30} /> {name}{" "}
        </div>
        <span>
          {animate && (
            <CountUp start={0} end={widthValue} duration={2} className="me-0" />
          )}
          %
        </span>
      </div>
      <div className="prog">
        {/* Using a dynamic key to re-render the span and restart the animation */}
        <span
          key={animate ? "animated" : "static"}
          className={animate ? "animate" : ""}
          style={{ "--skill-width": width }}
        ></span>
      </div>
    </div>
  );
};

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setAnimate(true)}
      onExit={() => setAnimate(false)}
    >
      <div
        className="skills d-flex justify-content-center align-items-center"
        id="skill"
      >
        <div className="container" >
          <div className="title">My Skills</div>
          <div className="row">
            {skillsData.map((skill, index) => (
              <Skill
                key={index}
                name={skill.name}
                width={skill.width}
                image={skill.image}
                animate={animate}
              />
            ))}
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Skills;
