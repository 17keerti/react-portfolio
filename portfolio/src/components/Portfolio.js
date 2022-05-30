import React from "react";

function Portfolio() {
  return (
    <div>
      <div className="uk-text uk-padding-small">
        <h2 id="portfolio">Projects</h2>
      </div>
      <div
        className="uk-child-width-1-3@m uk-text-center uk-height-match uk-margin-small-left  uk-grid"
        uk-grid
      >
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top">
            <img
              src="get-unbored-overview.gif"
              width="250"
              height="250"
              alt=""
            ></img>
          </div>
          <div className="uk-card-body">
            <a href="https://17keerti.github.io/get-unbored/">
              <h3 className="uk-card-title">Get Unbored</h3>
            </a>
            <a
              className="uk-text-center"
              href="https://github.com/17keerti/get-unbored"
            >
              <span uk-icon="github"></span>
            </a>

            <p>
              This app will generate jokes and random activities so that you are
              never bored and have something fun to do. User can save their
              favorites jokes and activities with the like button and access
              them in favorites page.
            </p>
          </div>
        </div>
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top">
            <img
              src="work-day-scheduler.png"
              width="250"
              height="250"
              alt=""
            ></img>
          </div>
          <div className="uk-card-body">
            <a href="https://17keerti.github.io/Work-Day-Scheduler/">
              <h3 className="uk-card-title">Work Day Scheduler</h3>
            </a>
            <a href="https://github.com/17keerti/Work-Day-Scheduler">
              <span uk-icon="github"></span>
            </a>
            <p>
              This is a calendar application that allows user to save events for
              each hour of the day. This app will run in the browser and feature
              dynamically updated HTML and CSS powered by jQuery.
            </p>
          </div>
        </div>

        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top">
            <img
              src="weather-dashboard.png"
              width="250"
              height="250"
              alt=""
            ></img>
          </div>
          <div className="uk-card-body">
            <a href="https://17keerti.github.io/Weather-Dashboard/">
              <h3 className="uk-card-title">Weather Dashboard</h3>
            </a>
            <a href="https://github.com/17keerti/Weather-Dashboard">
              <span uk-icon="github"></span>
            </a>
            <p>
              It is a weather dashboard that takes input from user to search for
              weather outlook for multiple cities. It uses the OpenWeather API
              to retrieve weather data and uses localStorage to store any cities
              that have been searched and allows user to call them.
            </p>
          </div>
        </div>
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top">
            <img src="password.png" width="250" height="250" alt=""></img>{" "}
          </div>
          <div className="uk-card-body">
            <a href="https://17keerti.github.io/password-generator-29thmarch/">
              <h3 className="uk-card-title">Password Generator</h3>
            </a>
            <a href="https://github.com/17keerti/password-generator-29thmarch">
              <span uk-icon="github"></span>
            </a>
            <p>
              This generates a random password based on user-selected criteria.
              It gives several prompts to users to select options. Once all
              prompts are answered, the user will be given a password of their
              choice.
            </p>
          </div>
        </div>
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top">
            <img src="password.png" width="250" height="250" alt=""></img>{" "}
          </div>
          <div className="uk-card-body">
            <a href="https://17keerti.github.io/password-generator-29thmarch/">
              <h3 className="uk-card-title">Password Generator</h3>
            </a>
            <a href="https://github.com/17keerti/password-generator-29thmarch">
              <span uk-icon="github"></span>
            </a>
            <p>
              This generates a random password based on user-selected criteria.
              It gives several prompts to users to select options. Once all
              prompts are answered, the user will be given a password of their
              choice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
