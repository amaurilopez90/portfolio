import React, { Component } from 'react';
import ReactZoomy from 'react-zoomy';

//Import special styling components
import ProgressText, { ProgressContainer } from '../specialStyling/progressText';
import { Div } from '../specialStyling/types';
import AudioPlayer from '../specialStyling/music';
import { Flex } from '../specialStyling/flexBox';
import { Revealp, Slidep, FadeIn } from '../specialStyling/revealAnimation';
import WhenInView from '../specialStyling/whenInView';
import ContactForm from '../contactForm/contact';
import { ImageButton } from '../specialStyling/hoverScale';

class AboutMe extends Component {
  constructor(props){
    super(props);
    this.state = {
      progress: 0,
      isDoneLoading: false,
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
                <Revealp className="para1Reveal" transform={'right'} hide={!isInView} barColor = '#5A6D87'>
                  <p className="para1">
                    You're here! That means you want to know more about me. If you viewed the video on my home
                    page then you should know my name is Amauri Lopez. 
                  </p>
                </Revealp>
              }
            </WhenInView>
            <br/><br/>
            <WhenInView>
              {({ isInView }) => 
                <Revealp className="para1Reveal" transform={'right'} hide={!isInView} barColor = '#424242'>
                  <p className="para1" style={{color: '#5A6D87'}}>
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
                <FadeIn className="para2Reveal"  hide={!isInView}>
                  <p className="para2">
                    You can play a song while learning more about me. 
                  </p>
                </FadeIn>
              }
            </WhenInView>
            
            <div className="project-item">

              <WhenInView>
                {({ isInView }) => 
                  <Slidep direction={'bottom'} hide={!isInView}>

                    <div className="Index">
                      <h1 className="HealthIcon" >
                        <i className="fa fa-heartbeat"/>
                      </h1>
                    </div>
                    
                  </Slidep>
                }
              </WhenInView>
              <WhenInView>
                {({ isInView }) => 
                  <Slidep direction={'right'} hide={!isInView}>

                    <h1 className="leftAboutMe" >
                      Health and Exercise
                    </h1>
                  </Slidep>
                }
              </WhenInView>
            </div>

            <WhenInView>
              {({ isInView }) => 
                <Revealp className="LeftDescriptionReveal" transform={'left'} hide={!isInView} barColor = '#424242'>
                  <p className="LeftDescription" >
                    Another part of my life is centered around Health and Exercise.
                    I love pushing myself to become better and stronger everyday! 
                  </p>
                </Revealp>
              }
            </WhenInView>

            <WhenInView>
              {({ isInView }) => 
                <FadeIn  hide={!isInView}>
                  <div>
                    <div className="Exercise">

                      <ReactZoomy className="Zoomy" 
                        imageUrl={require('../../Assets/Exercise.gif')}
                        renderThumbnail={({ showImage }) => 
                        <ImageButton onClick={showImage}>
                          <img className="ZoomyThumbnail" src={require('../../Assets/ExerciseThumbnail.JPG')} alt="Exercise" />
                        </ImageButton>
                        }
                        scale={[1, 1]}
                        imageProps={{
                          style: {
                            width: '100vw',
                            height: 'auto'
                          }
                        }}
                        />
                        
                        <div className="SideTextExercise">
                          <h6 className="SideText">Click to Zoom!</h6>
                        </div>

                    </div>
                    <div className="Motto">
                      <h6 >"Strive for progress, not perfection."</h6>
                    
                    </div>

                  </div>
                </FadeIn>
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

                    <h1 className="rightAboutMe">
                      Production
                    </h1>
                  </Slidep>
                }
              </WhenInView>
            </div>

            <WhenInView>
              {({ isInView }) => 
                <Revealp className="RightDescriptionReveal" transform={'right'} hide={!isInView} barColor = '#424242'>
                  <p className = "RightDescription" >
                    I'm a musician and bass guitarist of 7 years.
                    Here's a short video of me in action. 
                  </p>
                </Revealp>
              }
            </WhenInView>
            
            <br/><br/><br/><br/>

            <div className="project-item">
              <WhenInView>
                  {({ isInView }) => 
                    <Slidep direction={'bottom'} hide={!isInView}>

                      <div className="Index">
                        <h1 className="InspirationsIcon" >
                          <i className="fa fa-users" aria-hidden="true"/>
                        </h1>
                      </div>
                      
                    </Slidep>
                  }
                </WhenInView>
                <WhenInView>
                  {({ isInView }) => 
                    <Slidep direction={'right'} hide={!isInView}>

                      <h1 className="leftAboutMe" >
                        Inspirations
                      </h1>
                    </Slidep>
                  }
                </WhenInView>
            </div>
            
            <WhenInView>
              {({ isInView }) => 
                <Revealp className="LeftDescriptionReveal" transform={'left'} hide={!isInView} barColor = '#424242'>
                  <p className="LeftDescription" >
                    It's strange to think that some people you haven't even met can have a strong influence in your life.
                    Here are some of my greatest inspirations.    
                  </p>
                </Revealp>
              }
            </WhenInView>

            <WhenInView>
              {({ isInView }) => 
                <FadeIn hide={!isInView}>
                  <div className="gridTylerCarter">
                    <ReactZoomy className="Zoomy" 
                      imageUrl={require('../../Assets/tyler-carter.jpg')}
                      renderThumbnail={({ showImage }) => 
                      <ImageButton onClick={showImage}>
                        <figure className="effect-sadie">
                          <img className = "ImageTylerCarter" src={require('../../Assets/tyler-carter.jpg')} alt="tylercarter" />
                          <figcaption>
                            <h2><div><h1>01</h1></div>Tyler <span>Carter</span></h2>
                            <p>Singer - Songwriter - Musician - Record Producer</p>
                          </figcaption>			
                        </figure>
                      </ImageButton>
                      }
                      scale={[1, 1]}
                      imageProps={{
                        style: {
                          position: 'relative',
                          width: '110vw',
                          left: '-5vw',
                          height: 'auto'
                        }
                      }}
                      />
                  </div>
                </FadeIn>
              }
            </WhenInView>
            <div className="InspirationsSideText Tyler">
              <h6 className="SideText">Click to zoom!</h6>
            </div>

            <br/>

            <WhenInView>
              {({ isInView }) => 
                <Revealp className="LeftDescriptionReveal" transform={'left'} hide={!isInView} barColor = '#424242'>
                  <p className="LeftDescription" style={{color: '#424242'}}>
                    Tyler Carter is one of my favorite singers and songwriters within his genre. 
                    The reason he stands out to me is because he was not afraid to bring a style of RnB and Pop way out of its arena into 
                    the metal/post-hardcore scene.        
                  </p>
                </Revealp>
              }
            </WhenInView>

            <WhenInView>
              {({ isInView }) => 
                <Revealp className="LeftDescriptionReveal" transform={'left'} hide={!isInView} barColor = '#424242'>
                  <p className="LeftDescription" style={{color: '#424242'}}>
                      In a <a href="https://www.youtube.com/watch?v=AP1eO6e5OhA" target="_blank" rel="noopener noreferrer">short documentary </a>
                      Tyler explains his struggles with the loss of loved ones as well as his battles with his own sexuality that may have made
                      anyone else quit.       
                  </p>
                  
                </Revealp>
              }
            </WhenInView>

            <br/><br/><br/><br/>

            <WhenInView>
              {({ isInView }) => 
                <FadeIn hide={!isInView}>
                  <div className="gridJaredLeto">
                    <ReactZoomy className="Zoomy" 
                      imageUrl={require('../../Assets/jared-leto.jpg')}
                      renderThumbnail={({ showImage }) => 
                      <ImageButton onClick={showImage}>
                        <figure className="effect-sadie">
                          <img className = "ImageJaredLeto" src={require('../../Assets/jared-leto.jpg')} alt="jaredleto" />
                          <figcaption>
                            <h2 className="right"><div><h1>02</h1></div>Jared <span>Leto</span></h2>
                            <p className="right" >Actor - Singer - Songwriter - Director</p>
                          </figcaption>			
                        </figure>
                      </ImageButton>
                      }
                      scale={[1, 1]}
                      imageProps={{
                        style: {
                          position: 'relative',
                          width: '110vw',
                          left: '-5vw',
                          height: 'auto'
                        }
                      }}
                      />
                  </div>
                </FadeIn>
              }
            </WhenInView>
            <div className="InspirationsSideText Jared" >
              <h6 className="SideText">Click to zoom!</h6>
            </div>

            <WhenInView>
              {({ isInView }) => 
                <Revealp className="RightDescriptionReveal" transform={'left'} hide={!isInView} barColor = '#424242'>
                  <p className="RightDescription" style={{color: '#424242'}}>
                      The famous Jared Leto has also been another inspiration for me even from a young age. I've watched him go from
                      being the front-man vocalist of '30 Seconds to Mars' to one of my favorite American actors and director of my personal favorite '
                      <a href="https://www.youtube.com/watch?v=iJAP8q_iPOw" target="_blank" rel="noopener noreferrer">Mr. Nobody</a>' masterpiece.          
                  </p>
                  
                </Revealp>
              }
            </WhenInView>

            <br/><br/><br/><br/>
            <WhenInView>
              {({ isInView }) => 
                <FadeIn className="ContactStatementReveal" hide={!isInView} >
                  <h5>
                    Want to contact me? Set up an email below and let's get in touch! 
                  </h5>
                </FadeIn>
              }
            </WhenInView>

            <br/><br/>

            <ContactForm  targetEmail="amaurilopez90@gmail.com"/>
            
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
