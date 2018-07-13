import React, { Component } from 'react';

//Import special styling components
import ProgressText, { ProgressContainer } from '../specialStyling/progressText';
import { Div } from '../specialStyling/types';
import AudioPlayer from '../specialStyling/music';
import { Flex } from '../specialStyling/flexBox';
import { Revealp } from '../specialStyling/revealAnimation';
import WhenInView from '../specialStyling/whenInView';
import { Slidep } from '../specialStyling/revealAnimation';
import { relative } from 'path';

class AboutMe extends Component {
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
    }, 1200);
    setTimeout(() => {
      this.setState({ progress: 100 });
    }, 1800);
    setTimeout(() => {
      this.setState({ isDoneLoading: !this.state.isDoneLoading });
    }, 2200);
  }

  //When using render(), we should wrap all of our main elements under our div
  render() {
    const springOptions = { stiffness: 34, damping: 11};
    const { progress, isDoneLoading } = this.state;

    return (
      <div>


        <ProgressContainer isDoneLoading={isDoneLoading}>
          <div className ="ProgressText">
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

            <h1 className="Title">About Me</h1>
            
            <Flex justify={'center'} align={'center'} column>
              <p className="Description">
                "It's nice to know someone wants to know more about me than just my engineering background. People connect with people, not machines. This is who I am."
              </p>
            </Flex>

            <WhenInView>
              {({ isInView }) => 
                <Revealp transform={'right'} hide={!isInView} barColor = '#5A6D87'style={{
                  marginBottom: '0px',
                  left: '9.5em',
                  top: '3em',
                  width: '70%'
                }}>
                  <p style={{transform: 'translateY(1.2vh)', marginLeft: '1vw'}}>
                    You're here! That means you want to know more about me. If you viewed the video on my home
                    page then you should know my name is Amauri Lopez. 
                  </p>
                </Revealp>
              }
            </WhenInView>
            <br/><br/>
            <WhenInView>
              {({ isInView }) => 
                <Revealp transform={'right'} hide={!isInView} barColor = '#424242'style={{
                  marginBottom: '0px',
                  left: '9.5em',
                  top: '3em',
                  width: '70%'
                }}>
                  <p style={{transform: 'translateY(1.2vh)', marginLeft: '1vw', color: '#5A6D87'}}>
                    I feel like learning about someone's music interest is a great way to start to get to know someone. In fact, music plays a very important role in my life.
                    Here are a couple of my favorite songs (currently). 
                  </p>
                </Revealp>
              }
            </WhenInView>

            <AudioPlayer />
            <br/><br/><br/><br/>
            <WhenInView>
              {({ isInView }) => 
                <Revealp transform={'left'} hide={!isInView} barColor = '#5A6D87'style={{
                  marginBottom: '0px',
                  left: '9.5em',
                  width: '55%'
                }}>
                  <p style={{ marginLeft: '1vw'}}>
                    You can play a song while learning more about me. 
                  </p>
                </Revealp>
              }
            </WhenInView>
            
            <div className="project-item">

              <WhenInView>
                {({ isInView }) => 
                  <Slidep direction={'bottom'} hide={!isInView}>

                    <div className="Index">
                      <h1 className="right">
                        <i className="fa fa-headphones"/>
                      </h1>
                    </div>
                    
                  </Slidep>
                }
              </WhenInView>
              <WhenInView>
                {({ isInView }) => 
                  <Slidep direction={'left'} hide={!isInView}>

                    <h1 className="right">
                      Production
                    </h1>
                  </Slidep>
                }
              </WhenInView>
            </div>

            <WhenInView>
              {({ isInView }) => 
                <Revealp className="ProductionReveal" transform={'right'} hide={!isInView} barColor = '#424242'>
                  <p className = "Production" >
                    I'm a musician and bass guitarist of 6 years.
                    Here's a short video of me in action. 
                  </p>
                </Revealp>
              }
            </WhenInView>


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
        </Div>
      </div>
    );
  }
}

export default AboutMe;
