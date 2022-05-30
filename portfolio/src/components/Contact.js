import React, { useState } from "react";
import Div100vh from "react-div-100vh";

function Contact() {
  const [showMessage, setShowMessage] = useState("");

  const handleMouseLeave = (e) => {
    e.target = setShowMessage(true);
  };
  return (
    <Div100vh>
      <form className="uk-form-stacked uk-margin-left uk-center">
        <div className="uk-margin">
          <label className="uk-form-label" for="form-stacked-text">
            Name:
          </label>
          <div className="uk-form-controls">
            <input
              className="uk-input uk-form-width-medium"
              onMouseOut={handleMouseLeave}
              id="form-stacked-text"
              type="text"
              placeholder="Name"
            ></input>
            {showMessage && <p className="message">Please enter name</p>}
          </div>
        </div>

        <div className="uk-margin">
          <label className="uk-form-label" for="form-stacked-select">
            Email:
          </label>
          <div className="uk-form-controls">
            <input
              className="uk-input uk-form-width-medium"
              onMouseOut={handleMouseLeave}
              id="form-stacked-text"
              type="email"
              placeholder="email"
            ></input>
            {showMessage && <p className="message">Please enter email</p>}
          </div>
        </div>

        <div className="uk-margin">
          <label className="uk-form-label" for="form-stacked-select">
            Message:
          </label>
          <input
            className="uk-input uk-form-width-medium uk-form-large"
            onMouseOut={handleMouseLeave}
            type="text"
            placeholder="Enter message"
          ></input>
          {showMessage && <p className="message">Please enter message</p>}
        </div>
        <button className="uk-button uk-button-default">Submit</button>
      </form>
    </Div100vh>
  );
}

export default Contact;
