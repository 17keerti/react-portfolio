import React from "react";
import Div100vh from "react-div-100vh";

function Resume() {
  var frontEndProficiencies = [
    "HTML",
    "CSS",
    "Javascript",
    "JQuery",
    "Responsive Design",
    "Bootstrap",
    "React",
  ];

  const backEndProficiencies = [
    "APIs",
    "Node",
    "Express",
    "MySQL, Sequelize",
    "MongoDB, Mongoose",
    "REST",
    "GraphQL",
  ];

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
        {frontEndProficiencies.map((frontEnds) => (
          <li>{frontEnds}</li>
        ))}
      </ul>

      <div className="uk-margin-left">Back-end Proficiencies</div>
      <ul>
        {backEndProficiencies.map((backends) => (
          <li>{backends}</li>
        ))}
      </ul>
    </Div100vh>
  );
}

export default Resume;
