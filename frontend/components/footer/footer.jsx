import React from "react";
// import { withRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="back-to-top" onClick={() => window.scrollTo(0, 0)}>
        Back to top
      </div>
      <div className="sub-bottom-footer">
        <div className="get-to-know">
          Get to Know the Creator
          <li id="first">
            Jae-Wook Lim |
            <a
              className="creator-links"
              href="https://www.linkedin.com/in/jae-wook-lim-93b5b8214/"
              target="_blank"
            >
              {" "}
              LinkedIn
            </a>{" "}
            |
            <a
              className="creator-links"
              href="https://github.com/jaewooklim1"
              target="_blank"
            >
              {" "}
              GitHub
            </a>
          </li>
        </div>
      </div>
      <div className="bottom-footer">
        <Link to="/">
          <img
            className="and-so-on-logo"
            src="https://i.imgur.com/Cswr148.png"
          />
        </Link>
      </div>
    </footer>
  );
}
