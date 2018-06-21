import React, { Component } from 'react';

class Homepage extends Component {
  //When using render(), we should wrap all of our main elements under our div
  render() {
    return (
      <div className = "container-fluid">

        <h1>
          Home Page Content
        </h1>

        <p>
          Dummy Text here for testing
        </p>
      
      </div>
    );
  }
}

export default Homepage;
