import React, { Component } from 'react';

//Special Styling components
import { Revealp } from '../specialStyling/revealAnimation';
import WhenInView from '../specialStyling/whenInView';

class Homepage extends Component {

  //When using render(), we should wrap all of our main elements under our div
  render() {
    return (
      <div className = "container-fluid">

       <h1 className="Title"></h1>

        <br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/>


        <div className="NextPageIcon">
          <a className="Arrow" href="/AboutMe">
            <p>Get to know me</p>
          </a>
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </div>

      
      </div>
    );
  }
}

export default Homepage;
