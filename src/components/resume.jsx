import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS for dropdowns
import { Link } from "react-router-dom";
import "./resume.css";

const Resume = () => {
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
      <div className="container my-5">
        {/* Section: Education */}
        <div className="card mb-4">
          <div className="card-header bg-primary text-white fs-4">
            Education
          </div>
          <div className="card-body">
            <p>NBKR Institute of Science and Technology, Vidyanagar</p>
            <p>B.Tech CSE, 2020-2024, Aggregated CGPA: 6.5+</p>
            <p>Narayana Junior College, Gudur, CGPA: 8.5</p>
          </div>
        </div>

        {/* Section: Work Experience */}
        <div className="card mb-4">
          <div className="card-header bg-primary text-white fs-4">
            Work Experience
          </div>
          <div className="card-body">
            <h6>1. Sales Prediction Using Machine Learning</h6>
            <ul>
              <li>Role: Front-End Developer</li>
              <li>
                Description: A user-friendly pricing monitoring tool designed
                for JioMart.
              </li>
            </ul>
            <h6>2. Tech Blog</h6>
            <ul>
              <li>
                Description: A web app platform for publishing tech articles and
                discussions.
              </li>
            </ul>
          </div>
        </div>

        {/* Section: Skills */}
        <div className="card mb-4">
          <div className="card-header bg-primary text-white fs-4">Skills</div>
          <div className="card-body">
            <p>
              HTML5, Python, MS Office, GitHub, CSS3, Bootstrap, JavaScript,
              Tailwind CSS
            </p>
          </div>
        </div>

        {/* Section: Languages Known */}
        <div className="card mb-4">
          <div className="card-header bg-primary text-white fs-4">
            Languages Known
          </div>
          <div className="card-body">
            <p>English</p>
            <p>Telugu</p>
            <p>Conversational Hindi</p>
          </div>
        </div>

        {/* Resume PDF Link */}
        <div className="mt-4 text-center">
          <h4 className="text-primary">Download My Resume</h4>
          <a
            href="https://drive.google.com/file/d/1B9pXiAgoWWHgQ8QBUTf9o_bwdNyeFTz6/view?usp=drivesdk"
            className="btn btn-success"
          >
            Download PDF
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-3">
        <div className="container text-center">
          <div className="row">
            <div className="col-4">Email: nilamprudhvireddy@gmail.com</div>
            <div className="col-4">Phone: +917780410997</div>
            <div className="col-4">&copy; 2024 All Rights Reserved</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Resume;
