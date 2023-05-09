import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footerc">
          <h3>Copyright © 2023. All rights are reserved</h3>
          <div className="footerc__socials">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
