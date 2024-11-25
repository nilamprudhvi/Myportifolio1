import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './home.css';  // Assuming the CSS file is in the same directory

const Home = () => {
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

      {/* Main Content Section */}
      <div className="main-content" style={{ background: 'url("path-to-your-background-image.jpg") no-repeat center center fixed', backgroundSize: 'cover' }}>
        <div className="container text-center text-white py-5">
          <img src="\img\profile.jpg" className="fig rounded-circle border border-white" alt="Nilam Prudhvi" width="200" height="200" />
          <div className="details3 mt-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px' }}>
            <h3>Hello, I’m Nilam Prudhvi</h3>
            <p>Graduate student at NBKR Institute of Science and Technology</p>
            <hr />
            <p>Graduated with a Bachelor of Technology in Computer Science and Engineering, with interests in tech, sports, and music.</p>
          </div>
        </div>
      </div>
<hr />
      {/* Intro Section */}
      <section className="container text-center mt-5">
        <h2 className="head2 mb-4">Intro</h2>
        <div className="main2">
          <section className="selfdetails">
            <p>I enjoy music, which helps me stay balanced and inspired. These interests help me stay creative and motivated. I recently graduated with a degree in Computer Science Engineering, and I gained valuable experience working with technologies like HTML5, CSS3, JavaScript, Python, and Bootstrap v.5.3. These skills have helped me develop strong front-end development skills.</p>
            <hr />
            <p>Feel free to explore my portfolio to learn more about my projects and experience. I'm always open to new opportunities and connections, so don’t hesitate to reach out!</p>
          </section>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="container-fluid p-3 mb-2 bg-dark text-white mt-5">
        <div className="container text-center">
          <div className="row align-items-start row-gap-4">
            <div className="col-4">
              <p>nilamprudhvireddy@gmail.com</p>
            </div>
            <div className="col-4">
              <p>Phone number: +917780410997</p>
            </div>
            <div className="col-4">
              <p>&copy;2024 All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
