import React from "react";
import Div100vh from "react-div-100vh";

function Resume() {
  return (
    <Div100vh>
      <div className="uk-text uk-padding-small">
        <h2 id="resume">Resume</h2>
        <a target="blank" href="Keerti_Resume.pdf">
          <span uk-icon="file-pdf"></span>Download my Resume
        </a>
      </div>
      <div className="uk-margin-left">Front-end Proficiencies</div>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>JQuery</li>
        <li>Responsive Design</li>
        <li>Bootstrap</li>
        <li>React</li>
      </ul>
      <div className="uk-margin-left">Back-end Proficiencies</div>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </Div100vh>
  );
}

export default Resume;
