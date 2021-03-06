import React from "react";
import Div100vh from "react-div-100vh";

function AboutMe() {
  return (
    <Div100vh>
      <img
        className="uk-thumbnail uk-border-circle"
        src="mypicture.png"
        alt="myPicture"
      ></img>
      <div className="uk-text uk-padding-small">
        <h2 id="aboutme">About me</h2>
      </div>
      <div className="uk-margin-left">
        I am a Computer Science Student. I enjoy problem-solving and i have a
        great passion for coding and development. Always striving to bring 100%
        to the work I do. I have worked on technologies like HTML5, CSS,
        JavaScript, jQuery.
      </div>
    </Div100vh>
  );
}

export default AboutMe;
