import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Curated Calendar</h1>
          <p>Choose your favourite destination.</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="javascript:void(0);">Changelog</a>
          <a href="javascript:void(0);">Status</a>
          <a href="javascript:void(0);">License</a>
          <a href="javascript:void(0);">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="javascript:void(0);">Github</a>
          <a href="javascript:void(0);">Issues</a>
          <a href="javascript:void(0);">Project</a>
          <a href="javascript:void(0);">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="javascript:void(0);">Support</a>
          <a href="javascript:void(0);">Troubleshooting</a>
          <a href="javascript:void(0);">Contact us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="javascript:void(0);">Terms of Service</a>
          <a href="javascript:void(0);">Privacy Policy</a>
          <a href="javascript:void(0);">License</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
