import React, { Component } from 'react';
import ReactZoomy from 'react-zoomy';

//Import special Styling components
import { ImageButton } from '../specialStyling/hoverScale';


class Projects extends Component {
  //When using render(), we should wrap all of our main elements under our div
  render() {
    return (
    
      <div className = "container-projects">

        <h1 className="Title">
            Projects
        </h1>

        <div className="Zoomy">

          <ReactZoomy
            imageUrl={require('../../Assets/Alienz.gif')}
            renderThumbnail={({ showImage }) => 
            <ImageButton onClick={showImage}>
              <img src={require('../../Assets/Alienz_thumbnail_smaller.jpg')} alt="Alienz" />
            </ImageButton>
            }
            scale={[1.1, 1.1]}
            imageProps={{
              style: {
                width: '100vw',
                height: 'auto'
              }
            }}
          />

        </div>
      
      </div>
    );
  }
}

export default Projects;
