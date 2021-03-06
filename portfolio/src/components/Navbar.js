import React from "react";

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "flex-end",
    background: "#D3F4FB",
  },
};

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="uk-navbar-container" uk-navbar style={styles.navbar}>
      <div className="uk-navbar-left">
        <h1>Keerti</h1>
      </div>
      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav uk-nav">
          <li className={currentPage === "AboutMe" ? "uk-active" : "nav-link"}>
            <a href="#aboutme" onClick={() => handlePageChange("AboutMe")}>
              <span uk-icon="user"></span>About Me
            </a>
          </li>
          <li
            className={currentPage === "Portfolio" ? "uk-active" : "nav-link"}
          >
            <a href="#portfolio" onClick={() => handlePageChange("Portfolio")}>
              <span uk-icon="folder"></span>Portfolio
            </a>
          </li>
          <li className={currentPage === "Resume" ? "uk-active" : "nav-link"}>
            <a href="#resume" onClick={() => handlePageChange("Resume")}>
              <span uk-icon="file-pdf"></span>Resume
            </a>
          </li>
          <li className={currentPage === "Contact" ? "uk-active" : "nav-link"}>
            <a href="#contact" onClick={() => handlePageChange("Contact")}>
              <span uk-icon="user"></span>Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
