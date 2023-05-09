/* eslint-disable @next/next/no-img-element */
import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="img-side">
            <img
              src="/static/working-emoji.png"
              className="work-emoji"
              alt="emoji"
            />
            <img
              src="/static/about-img.webp"
              className="img-side__main-img"
              alt="me"
            />
            <span>
              <img
                src="/static/text.svg"
                alt="text"
              />
            </span>
          </div>
          <div className="text-side">
            <h4>About me</h4>
            <h3>
              A dedicated Front-end Developer
              <br />
              based in Hanoi, VietNam 📍
            </h3>
            <p>
              As a Pre-Middle Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
