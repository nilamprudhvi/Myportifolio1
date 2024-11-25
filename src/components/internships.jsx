import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import { Link } from "react-router-dom";
import './internships.css'

const Internships = () => {
  return (
    <div>
      {/* Navbar */}
      <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        background:
          "linear-gradient(90deg, rgba(0,123,255,1) 0%, rgba(41,121,255,1) 100%)",
      }}
    >
      <div className="container-fluid">
        {/* Navbar Brand */}
        <Link
          className="navbar-brand"
          to="/"
          style={{ fontWeight: "bold", fontSize: "24px" }}
        >
          Nilam Prudhvi
        </Link>
        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume">
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/internships">
                Internship
              </Link>
            </li>
          </ul>
        </div>
        {/* Social Media Icons */}
        <div className="d-flex gap-3">
          <a
            className="navbar-brand"
            href="https://github.com/nilamprudhvi/foodika"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/000000/github.png"
              alt="GitHub"
              width="30"
              height="30"
            />
          </a>
          <a
            className="navbar-brand"
            href="https://www.facebook.com/login/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/000000/facebook.png"
              alt="Facebook"
              width="30"
              height="30"
            />
          </a>
          <a
            className="navbar-brand"
            href="https://www.instagram.com/accounts/login/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png"
              alt="Instagram"
              width="30"
              height="30"
            />
          </a>
          <a
            className="navbar-brand"
            href="https://www.linkedin.com/in/nilam-prudhvi-bb900a269"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
              alt="LinkedIn"
              width="30"
              height="30"
            />
          </a>
        </div>
      </div>
    </nav>

      {/* Main Content */}
      <div className="bg-dark text-white">
        <div className="container mt-5">
          <h1 className="text-center mb-4">Internships</h1>
          <p className="text-center lead">
            A collection of internships showcasing skills, learning, and achievements.
          </p>

          {/* Internship Cards */}
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {/* Internship 1 */}
            <div className="col">
              <div className="card h-100 bg-secondary text-white">
                <div className="card-body">
                  <h5 className="card-title">Python Programming Internship</h5>
                  <p className="card-text">
                    <strong>ID:</strong> DEV241444<br />
                    <strong>Duration:</strong> 4 Months<br />
                    <strong>Experience:</strong> Basic programming in Python & Object-Oriented Programming.
                  </p>
                </div>
              </div>
            </div>

            {/* Internship 2 */}
            <div className="col">
              <div className="card h-100 bg-secondary text-white">
                <div className="card-body">
                  <h5 className="card-title">Data Science Internship</h5>
                  <p className="card-text">
                    <strong>ID:</strong> TK128227<br />
                    <strong>Duration:</strong> 1 Month<br />
                    <strong>Experience:</strong> Practical experience in data preprocessing, analysis, and modeling.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Helpful Resources */}
          <div className="mt-5">
            <h3 className="text-center">Helpful Resources</h3>
            <div className="d-flex justify-content-center gap-4 mt-4">
              <div className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  My Internship
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      My step-by-step guide to getting internships
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  General Advice
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      How to answer "Tell me about yourself"
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="container-fluid p-3 mt-5 bg-black text-white">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-4">nilamprudhvireddy@gmail.com</div>
              <div className="col-md-4">+917780410997</div>
              <div className="col-md-4">&copy;2024 All Rights Reserved.</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Internships;
