import React from "react";

function Contact() {
  return (
    <form className="uk-form-stacked uk-margin-left">
      <div className="uk-margin">
        <label className="uk-form-label" for="form-stacked-text">
          Name:
        </label>
        <div className="uk-form-controls">
          <input
            className="uk-input uk-form-width-medium"
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
            id="form-stacked-text"
            type="text"
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
          type="text"
          placeholder="Enter message"
        ></input>
      </div>
      <button className="uk-button uk-button-default">Submit</button>
    </form>
  );
}

export default Contact;
