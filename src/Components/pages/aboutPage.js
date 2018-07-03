import React, { Component } from 'react';

class AboutMe extends Component {
  //When using render(), we should wrap all of our main elements under our div
  render() {
    return (
      <div className = "container-fluid">

        <h1 className="Title">About Me</h1>

        <div className="PreviousPageIcon">
          <a className="Arrow" href="/">
            <p>Home</p>
          </a>
          <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
        </div>

        <div className="NextPageIcon">
          <a className="Arrow" href="/Projects">
            <p>Open-Source Projects</p>
          </a>
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </div>
      
      </div>
    );
  }
}

export default AboutMe;
