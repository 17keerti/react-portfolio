import React, { useState } from "react";
import Div100vh from "react-div-100vh";

function Contact() {
  const [showMessage, setShowMessage] = useState(" ");

  const handleInputChange = (e) => {
    if (e.target.value === "") {
      setShowMessage(`You must enter a valid ${e.target.name}`);
    } else {
      setShowMessage(" ");
    }
  };

  return (
    <Div100vh>
      <form className="uk-form-stacked uk-margin-left uk-center" id="contact">
        <div className="uk-margin">
          <label className="uk-form-label" for="form-stacked-text">
            Name:
          </label>
          <div className="uk-form-controls">
            <input
              className="uk-input uk-form-width-medium"
              name="name"
              onBlur={handleInputChange}
              id="form-stacked-text"
              type="text"
              placeholder="Name"
            ></input>
          </div>
        </div>

        <div className="uk-margin">
          <label className="uk-form-label" for="form-stacked-select">
            Email:
          </label>
          <div className="uk-form-controls">
            <input
              className="uk-input uk-form-width-medium"
              name="email"
              onBlur={handleInputChange}
              id="form-stacked-text"
              type="email"
              placeholder="email"
            ></input>
          </div>
        </div>

        <div className="uk-margin">
          <label className="uk-form-label" for="form-stacked-select">
            Message:
          </label>
          <input
            className="uk-input uk-form-width-medium uk-form-large"
            name="message"
            onBlur={handleInputChange}
            type="text"
            placeholder="Enter message"
          ></input>
          {showMessage && <p className="message">{showMessage}</p>}
        </div>
        <button className="uk-button uk-button-default" type="submit">
          Submit
        </button>
      </form>
    </Div100vh>
  );
}

export default Contact;
