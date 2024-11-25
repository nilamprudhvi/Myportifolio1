import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Contact = () => {
  return (
    <div>
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
    <div style={{ display: "flex", gap: "15px" }}>
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

      <div className="container mt-5 text-center">
        <label className="display-4">Contact Me!</label>
        <div className="lead">
          Have any questions? Fill out the form below, and I’ll get back to you soon!
        </div>
        
        <div className="row mt-4">
          <div className="col-md-8 offset-md-2">
            <form className="bg-light p-5 rounded shadow">
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name (required)</label>
                <input type="text" className="form-control" id="firstName" placeholder="Enter Your First Name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name (required)</label>
                <input type="text" className="form-control" id="lastName" placeholder="Enter Your Last Name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email (required)</label>
                <input type="email" className="form-control" id="email" placeholder="Enter Your Email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="contactAs" className="form-label">Which are you? (required)</label>
                <select id="contactAs" className="form-select">
                  <option value="student">Student</option>
                  <option value="recruiter">Recruiter</option>
                  <option value="company">Company (NIL)</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message (required)</label>
                <textarea id="message" className="form-control" rows="5" placeholder="Enter your message here" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send</button>
            </form>
          </div>
        </div>
      </div>

      <footer className="container-fluid p-3 bg-black text-white mt-5">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4">
              nilamprudhvireddy@gmail.com
            </div>
            <div className="col-md-4">
              Phone number: +917780410997
            </div>
            <div className="col-md-4">
              &copy;2024 All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
