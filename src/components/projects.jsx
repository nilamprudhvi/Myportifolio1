import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"; 
import './projects.css'

const Projects = () => {
  return (

    <div>
      {/* Navbar with gradient background */}
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

    <div style={{ backgroundColor: '#1a1a2e', color: 'white', minHeight: '100vh', paddingTop: '20px' }}>
      {/* Projects Section */}
      <div className="container">
        <h1 className="text-center mb-5" style={{ color: '#f9ca24' }}>
          My Projects
        </h1>

        {/* Project 1: Music Player */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h3>1. Music Player using JavaScript</h3>
            <p className="mt-3">
              A backend-less music player web application is a web-based platform that allows users
              to play music without relying on a traditional server-side backend infrastructure. This
              approach reduces reliance on server resources and can offer benefits such as faster load
              times and improved scalability.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src=""
              alt="Music Player"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
        <hr className="border border-primary border-2 opacity-75" />

        {/* Project 2: Tech Blog */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 order-md-2">
            <h3>2. Tech Blog</h3>
            <p className="mt-3">
              A web application dedicated to hosting a tech blog, providing a platform for users to
              publish articles, share insights, and engage in discussions on various technology-related
              topics.
              <br />
              Site:{' '}
              <a
                href="https://www.thenewspro.online/"
                style={{ color: '#00a8ff' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                The News Pro
              </a>
            </p>
          </div>
          <div className="col-md-6 order-md-1">
            <img
              src=""
              alt="Tech Blog"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
        <hr className="border border-primary border-2 opacity-75" />

        {/* Project 3: Online Mart Sales Prediction */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h3>3. Online Mart Sales Prediction</h3>
            <p className="mt-3">
              This project provides a price monitoring tool that helps users track product price changes
              on online marts. It allows users to view price fluctuations over different time periods,
              including yearly, monthly, and daily.
            </p>
            <p>
              <strong>Role:</strong> Front-End Development<br />
              <strong>Technologies:</strong> HTML, CSS, JavaScript, Bootstrap.css
            </p>
          </div>
          <div className="col-md-6">
            <img
              src=""
              alt="Online Mart Sales Prediction"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
        <hr className="border border-primary border-2 opacity-75" />

        {/* Project 4: Weather Forecast App */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 order-md-2">
            <h3>4. Weather Forecast App</h3>
            <p className="mt-3">
              Developed a weather app that provides real-time weather forecasts based on user location.
              Used ReactJS to dynamically update weather information fetched from the Open Weather Map API.
              Designed the app with Bootstrap and implemented error handling for API failures to provide a 
              user-friendly interface.
            </p>
            <p>
              <a
                href="https://github.com/nilamprudhvi/frontend-projects-assingments-2024/tree/main/weather"
                style={{ color: '#00a8ff' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Link
              </a>
            </p>
          </div>
          <div className="col-md-6 order-md-1">
            <img
              
              alt="Weather Forecast App"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
        <hr className="border border-primary border-2 opacity-75" />
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4">
              <p>Email: <strong>nilamprudhvireddy@gmail.com</strong></p>
            </div>
            <div className="col-md-4">
              <p>Phone: <strong>+917780410997</strong></p>
            </div>
            <div className="col-md-4">
              <p>&copy; 2024 All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default Projects;
