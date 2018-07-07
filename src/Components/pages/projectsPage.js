import React, { Component } from 'react';
import ReactZoomy from 'react-zoomy';
import ParallaxImage from 'react-image-parallax2';

//Import special Styling components
import { ImageButton } from '../specialStyling/hoverScale';
import { Flex } from '../specialStyling/flexBox';
import { Slidep, FadeIn } from '../specialStyling/revealAnimation';
import WhenInView from '../specialStyling/whenInView';

import ProgressText, { ProgressContainer } from '../specialStyling/progressText';
import { Div } from '../specialStyling/types';


class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      progress: 0,
      isDoneLoading: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ progress: 20 });
    }, 0);
    setTimeout(() => {
      this.setState({ progress: 50 });
    }, 800);
    setTimeout(() => {
      this.setState({ progress: 90 });
    }, 1600);
    setTimeout(() => {
      this.setState({ progress: 100 });
    }, 2400);
    setTimeout(() => {
      this.setState({ isDoneLoading: !this.state.isDoneLoading });
    }, 3200);
  }

  //When using render(), we should wrap all of our main elements under our div
  render() {
    const springOptions = { stiffness: 34, damping: 11};
    const { progress, isDoneLoading } = this.state;

    return (
      <div>
        <h1 className="Title">Projects</h1>

        <ProgressContainer isDoneLoading={isDoneLoading}>
          <div className ="ProgressText" >
            <ProgressText
              text={'LOADING...'}
              placeholderTextColor={'rgba(128, 128, 128, 0.25)'}
              progressTextColor={'#5A6D87'}
              renderText={(props, text) => <h1 {...props}>{text}</h1>}
              progress={progress}
              springOptions={springOptions}/>
          </div>
        </ProgressContainer>

        <Div isDoneLoading={isDoneLoading}>
          <div className = "container-fluid">
            <Flex justify={'center'} align={'center'} column>
              <p className="Description">
                "I sit down and think of projects that would challenge my creative mind. And then I do them. What's the most important quality of the projects I work towards presenting? That they are fun for me, and more importantly, fun for you!"
              </p>
            </Flex>
            
            <div className="project-item">

              <div className="Index">
                <h1>01</h1>
              </div>

              <h1 className="left">
                Tile Based - <a href="https://github.com/amaurilopez90/GameDev/tree/master/Alienz" target="_blank" rel="noopener noreferrer">
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
                      Raspberry Pi - <a href="https://github.com/amaurilopez90/SampledSoundSynth" target="_blank" rel="noopener noreferrer">
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
                      Unity 3D - <a href="https://github.com/amaurilopez90/GameDev/tree/master/BattleSpheres" target="_blank" rel="noopener noreferrer">
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
                      ReactJS - <a href="https://github.com/amaurilopez90/MyPortfolio" target="_blank" rel="noopener noreferrer">
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
              }}>Like what you see? Click to view the source!</h6>

            </div>

            <Flex justify={'center'} align={"center"}>
              <a className="ViewMore" href="https://github.com/amaurilopez90" target="_blank" rel="noopener noreferrer">View More</a>
            </Flex>

            <div className="PreviousPageIcon">
              <a className="Arrow" href="/AboutMe">
                <p>Get to know me</p>
              </a>
              <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
            </div>

        
          </div>
        </Div>
      </div>
    );
  }
}

export default Projects;
