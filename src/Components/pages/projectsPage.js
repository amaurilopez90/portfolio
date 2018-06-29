import React, { Component } from 'react';
import ReactZoomy from 'react-zoomy';
import ParallaxImage from 'react-image-parallax2';

//Import special Styling components
import { ImageButton } from '../specialStyling/hoverScale';
import { Flex } from '../specialStyling/flexBox';
import { Slidep } from '../specialStyling/revealAnimation';
import WhenInView from '../specialStyling/whenInView';
import { Rotatep } from '../specialStyling/types';

class Projects extends Component {
  //When using render(), we should wrap all of our main elements under our div
  render() {
    return (
    
      <div className = "container-fluid">
        <h1 className="Title">Projects</h1>
        <Flex justify={'center'} align={'center'} column>
          <p className="Description">
            "I sit down and think of tasks that would challenge and expand my creative mind. And then I do them. What's the most important quality of the projects I work towards presenting? That they are fun for me, and more importantly, fun for you!"
          </p>
        </Flex>
        
        <div className="project-item">

          <div className="Index">
            <h1>01</h1>
          </div>

          <h1 className="left">
            Tile Based - <a href="">
            Alienz</a>
          
          </h1>

          {/* <Flex justify={'left'} style={{
            transform: 'translateY(20vh)',
          }}>

            <Rotatep degree={'-90'}
            style={{
              marginLeft: '20%',
            }}>

              Click to zoom!
            </Rotatep>

          </Flex> */}

          <Flex justify={'center'}>

            <ReactZoomy
              imageUrl={require('../../Assets/Alienz.gif')}
              renderThumbnail={({ showImage }) => 
              <ImageButton onClick={showImage}>
                <img src={require('../../Assets/Alienz_thumbnail_bigger.jpg')} alt="Alienz" />
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

          <WhenInView>
            {({ isInView }) => 
              <Slidep direction={'top'} hide={!isInView}>

                <div className="Index">
                  <h1 className="right">02</h1>
                </div>
                
              </Slidep>
            }
          </WhenInView>


          <WhenInView>
            {({ isInView }) => 
              <Slidep direction={'left'} hide={!isInView}>

                <h1 className="right">
                  Raspberry Pi - <a href="">
                  Sampled Sound Synthesizer</a>
                
                </h1>

              </Slidep>
            }
          </WhenInView>

          <div className="Image">
          
            <ParallaxImage
              reduceHeight={1/3.7}
              src={require('../../Assets/Synth.jpeg')}/>
            
          </div>

        </div>

        <div className="project-item">

          <WhenInView>
            {({ isInView }) => 
              <Slidep direction={'bottom'} hide={!isInView}>

                <div className="Index">
                  <h1>03</h1>
                </div>
                
              </Slidep>
            }
          </WhenInView>

          <WhenInView>
            {({ isInView }) => 
              <Slidep direction={'right'} hide={!isInView}>

                <h1 className="left">
                  Unity 3D - <a href="">
                  Battle Spheres</a>
                
                </h1>

              </Slidep>
            }
          </WhenInView>

          <Flex justify={'center'}>
            <img src={require('../../Assets/BattleSpheresGif.gif')} alt=""/>
          </Flex>

        </div>

      
      </div>
    );
  }
}

export default Projects;
