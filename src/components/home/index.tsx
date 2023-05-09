/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="content">
          <div className="hero-main">
            <div className="hero-text">
              <h1>Front-End React Developer</h1>
              <img src="/static/waving.png" alt="Waving Image" />
              <p>
                Hi, I&apos;m Pham Binh Minh. A passionate Front-end React
                Developer based in Hanoi, VietNam. 📍
              </p>
              <span>
                <a
                  aria-label="linkedin"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/sundaypug/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  aria-label="github"
                  rel="noreferrer"
                  href="https://github.com/Sundayyy/"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </span>
            </div>
            <div className="hero-img"></div>
          </div>
          <div className="skills">
            <p>Tech Stack</p>
            <div className="logos">
              <ul>
                <li>
                  <img src="/static/html.svg" title="HTML5" alt="program_img" />
                </li>
                <li>
                  <img src="/static/css.svg" title="CSS3" alt="program_img" />
                </li>
                <li>
                  <img
                    src="/static/javascript.svg"
                    title="Javascript"
                    alt="program_img"
                  />
                </li>
                <li>
                  <img
                    src="/static/react.svg"
                    title="ReactJs"
                    alt="program_img"
                  />
                </li>
                <li>
                  <img
                    src="/static/tailwind.svg"
                    title="Tailwind CSS"
                    alt="program_img"
                  />
                </li>
                <li>
                  <img src="/static/scss.svg" title="SCSS" alt="program_img" />
                </li>
                <li>
                  <img
                    src="/static/nodejs-com.svg"
                    title="Nodejs"
                    alt="program_img"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
