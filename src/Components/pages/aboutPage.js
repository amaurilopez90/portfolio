import React, { Component } from 'react';

//Import special styling components
import ProgressText, { ProgressContainer } from '../specialStyling/progressText';
import { Div } from '../specialStyling/types';

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

        <h1 className="Title">About Me</h1>

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
