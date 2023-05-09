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
              <Image
                width={64}
                height={64}
                alt="waving_hand"
                src="/static/waving.png"
              />
              <p>
                Hi, I`&apos`m Pham Binh Minh. A passionate Front-end React Developer
                based in Hanoi, VietNam. 📍
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
            <div className="hero-img">

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
