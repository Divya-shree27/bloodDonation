import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}

        {/* Right */}
        <div>
          <a href="" className="me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4">
            <i className="fab fa-github"></i>
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links  */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>BLOOD SUPPORTERS
              </h6>
              <p>
                PROJECT BY DIVYA AND SABARITHA
              </p>
            </div>

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i>SNS COLLEGE OF ENGINEERING</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                divyashree.m.iot.2023@snsce.ac.in
                sabaritha.t.iot.2023@snsce.ac.in
              </p>
              <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className="fw-bold" href="#">BLOOD SUPPORTERS</a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
