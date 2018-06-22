import React, { Component, PropTypes } from 'react';

class Homepage extends Component {
  //When using render(), we should wrap all of our main elements under our div
  render() {
    return (
      <div className = "container-home">

        <div className = 'Image'>
          <h1>Amauri Lopez</h1>
          <h2>Software Developer</h2>
          <h2>Computer Engineer</h2>
          
        </div>

        
        <p className='body' hide>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      
      </div>
    );
  }
}

export default Homepage;
