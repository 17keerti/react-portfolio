import React from "react";

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "flex-end",
  },
};

function Navbar() {
  return (
    <nav className="uk-navbar-container" uk-navbar style={styles.navbar}>
      <div className="uk-navbar-left">
        <h1>Keerti</h1>
      </div>
      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
          <li>
            <a href="#aboutme">
              <span uk-icon="user"></span>About Me
            </a>
          </li>
          <li>
            <a href="#projects">
              <span uk-icon="folder"></span>Portfolio
            </a>
          </li>
          <li>
            <a target="blank" href="Keerti_Resume.pdf">
              <span uk-icon="file-pdf"></span>Resume
            </a>
          </li>
          <li>
            <a href="#contactme">
              <span uk-icon="user"></span>Contact me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
