import React, { Component } from 'react';
import { Link} from 'react-router-dom';

//Special Styling components
import ProgressText, { ProgressContainer } from '../specialStyling/progressText';
import { Div } from '../specialStyling/types';
import Video from '../specialStyling/video';
import { Flex } from '../specialStyling/flexBox';
import { Revealp } from '../specialStyling/revealAnimation';
import WhenInView from '../specialStyling/whenInView';

class Homepage extends Component {
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
          <Video videoUrl={require('../../Assets/myPortfolioHome.mp4')}/>
          <div className = "container-fluid">
          
            <h1 className="Title">Home</h1>

            <div className="SideTextHome">
                <h6 className="SideText">Click to Zoom!</h6>
            </div>

            <Flex justify={'left'}>
              <nav className="HomeNav">
                <ul>
                  <WhenInView>
                    {({ isInView }) => 
                      <Revealp transform={'right'} hide={!isInView}>
                        <li>
                            <Link to="/AboutMe">About Me</Link>
                        </li>
                      </Revealp>
                    }
                  </WhenInView>
                  <WhenInView>
                    {({ isInView }) => 
                      <Revealp transform={'right'} hide={!isInView}>
                        <li>
                            <Link to="/Projects">Projects</Link>
                        </li>
                      </Revealp>
                    }
                  </WhenInView>
                  <WhenInView>
                    {({ isInView }) => 
                      <Revealp transform={'right'} hide={!isInView}>
                        <li>
                        <a href="https://standardresume.co/amaurilopez">Resume</a>
                        </li>
                      </Revealp>
                    }
                  </WhenInView>
                        
                  </ul>
                </nav>
            </Flex>

            <div className="NextPageIcon">
              <a className="Arrow" href="/AboutMe">
                <p>Get to know me</p>
              </a>
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </div>

          
          </div>

        </Div>

      </div>
    );
  }
}

export default Homepage;
