import React from "react";

const styles = {
  footer: {
    display: "flex",
    justifyContent: "center",
    background: "#D3F4FB",
  },
};

function Footer() {
  return (
    <nav className="uk-navbar-container" style={styles.footer}>
      <div className="uk-navbar">
        <ul className="uk-navbar-nav">
          <li>
            <a target="blank" href="mailto: 17keerti@gmail.com">
              <span uk-icon="mail"></span>Email
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="https://www.linkedin.com/in/keerti-chaudhary-25331791/"
            >
              <span uk-icon="linkedin"></span>LinkedIn
            </a>
          </li>
          <li>
            <a target="blank" href="https://github.com/17keerti">
              <span uk-icon="github"></span>Github
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Footer;
