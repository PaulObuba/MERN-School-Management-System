import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    
    <footer>
      <div className="footer-sec1">
        <p>
          Our School is ranked "B" <br />
          by the Federal Department of Education.
        </p>
        <button>More Info</button>
      </div>
      <div className="footer-sec2">
        <div className="footer-logo">
          <a href="#">
            <img src="./images/logo.png" alt="logo" />
          </a>
        </div>
        <div className="foot-links">
          <h3 className="foot-title">Contact Us</h3>
          <p className="foot-text">
            2011 Bienville Street <br />
            New Orleans, LA 70112
          </p>
          <p className="foot-text">
            Phone: (504) 324-7061 <br />
            Fax: (504) 459-2602
          </p>
        </div>
        <div>
          <h3 className="foot-title">Quick Links</h3>
          <a href="#"> Home </a>
          <a href="#"> Courses </a>
          <a href="#"> Events </a>
          <a href="#"> Students </a>
          <a href="#"> Teachers </a>
        </div>
        <div>
          <h3 className="foot-title">Social Links</h3>
          <a href="#"> Facebook </a>
          <a href="#"> LinkedIn </a>
          <a href="#"> Instagram </a>
          <a href="#"> Twitter </a>
          <a href="#"> WhatsApp </a>
        </div>
      </div>
      <div className="footer-sec3">
        <div className="social-links">
          <h4>Social Links :</h4>
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
        </div>
        <p>
          Federal University of Technology Owerri | Copyright
          2023
        </p>
      </div>
      <div className="footer-sec4">
        <div className="overlay"></div>
        <h3>Belong to the best Department</h3>
        <p>
          Federal University of Technology Owerri interested in exploring
          the fields of science, technology, engineering, and math.
        </p>
      </div>
    </footer>
  )
}

export default Footer;