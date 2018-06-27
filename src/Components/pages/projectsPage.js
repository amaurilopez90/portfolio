import React, { Component } from 'react';
import ReactZoomy from 'react-zoomy';

//Import special Styling components
import { ImageButton } from '../specialStyling/hoverScale';
import { Flex } from '../specialStyling/flexBox';


class Projects extends Component {
  //When using render(), we should wrap all of our main elements under our div
  render() {
    return (
    
      <div className = "container-fluid">

        <div className="project-item">
          <div className="Index">
            <h1>01</h1>
          </div>

          <h1>
            Tile Based - <a href="">
            Alienz</a>
          
          </h1>

          <Flex justify={'center'}>
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
          </Flex>
        </div>

        <div className="project-item">
          <div className="Index">
            <h1>02</h1>
          </div>

          <h1>
            Raspberry Pi - <a href="">
            Sampled Sound Synthesizer</a>
          
          </h1>

          

        </div>
      
      </div>
    );
  }
}

export default Projects;
