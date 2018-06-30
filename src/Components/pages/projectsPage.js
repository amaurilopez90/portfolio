import React, { Component } from 'react';
import ReactZoomy from 'react-zoomy';
import ParallaxImage from 'react-image-parallax2';

//Import special Styling components
import { ImageButton } from '../specialStyling/hoverScale';
import { Flex } from '../specialStyling/flexBox';
import { Slidep, SlideSideTextLeft, SlideSideTextRight, FadeIn } from '../specialStyling/revealAnimation';
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
            Tile Based - <a href="https://github.com/amaurilopez90/GameDev/tree/master/Alienz" target="_blank">
            Alienz</a>
          
          </h1>

          <div className="Alienz" style={{
            display: 'inline-flex',
            position: 'relative',
          }}>
          
            <ReactZoomy className="Zoomy"
              imageUrl={require('../../Assets/Alienz.gif')}
              renderThumbnail={({ showImage }) => 
              <ImageButton onClick={showImage}>
                <img className="ZoomyThumbnail" src={require('../../Assets/Alienz_thumbnail_bigger.jpg')} alt="Alienz" />
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

          <div className="SideTextAlienzNew">
            <h6 className="SideText">Click to Zoom!</h6>
          
          </div>

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
                  Raspberry Pi - <a href="https://github.com/amaurilopez90/SampledSoundSynth" target="_blank">
                  Sampled Sound Synthesizer</a>
                
                </h1>

              </Slidep>
            }
          </WhenInView>

          <Flex justify={'center'}>
            <div className="SynthImage">
            
              <ParallaxImage
                reduceHeight={1/3.7}
                src={require('../../Assets/Synth.jpeg')}/>
                
                <div className="SideTextSynth">
                  {/* <SlideSideTextLeft hide={!isInView}> */}
                    <h6 className="leftSideText">Look closely...</h6>
                  {/* </SlideSideTextLeft> */}

                  {/* <SlideSideTextRight hide={!isInView}> */}
                    <h6 className="rightSideText">See the parallax?</h6>
                  {/* </SlideSideTextRight> */}
                </div>
              
            </div>
          </Flex>

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
                  Unity 3D - <a href="https://github.com/amaurilopez90/GameDev/tree/master/BattleSpheres" target="_blank">
                  Battle Spheres</a>
                
                </h1>

              </Slidep>
            }
          </WhenInView>


          <Flex justify={'center'}>
            <img className="BattleSpheresImage" src={require('../../Assets/BattleSpheresGif.gif')} alt=""/>
          </Flex>

          <WhenInView>
            {({ isInView }) => 
              <FadeIn hide={!isInView}>
                <div className="SideTextSpheres">
                  <h6 className="topSideText">«This one's my favorite!»</h6>
                </div>
              </FadeIn>
            }
          </WhenInView>

        </div>
        
        <div className="project-item">

          <WhenInView>
            {({ isInView }) => 
              <Slidep direction={'top'} hide={!isInView}>

                <div className="Index">
                  <h1 className="right">04</h1>
                </div>
                
              </Slidep>
            }
          </WhenInView>

          <WhenInView>
            {({ isInView }) => 
              <Slidep direction={'left'} hide={!isInView}>

                <h1 className="right">
                  ReactJS - <a href="https://github.com/amaurilopez90/MyPortfolio" target="_blank">
                  My Portfolio</a>
                
                </h1>

              </Slidep>
            }
          </WhenInView>

          <h6 style={{
            textAlign: 'end',
            marginRight: '12vw',
            marginTop: '9vh',
            fontSize: '13px',
            color: 'rgb(150, 141, 141)',
          }}>Like what you see? Click to view the source! ^</h6>

        </div>

        <Flex justify={'center'} align={"center"}>
          <a className="ViewMore" href="https://github.com/amaurilopez90" target="_blank">View More</a>
        </Flex>
     
      </div>
    );
  }
}

export default Projects;
