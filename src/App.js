import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

//make sure everything that is deployed are minified css files
import './Assets/css/default.min.css';

//Components
import Header from './Components/headerComponents/header';
import Homepage from './Components/pages/homePage';
import Resume from './Components/pages/resume';
import AboutMe from './Components/pages/aboutPage';
import Projects from './Components/pages/projectsPage';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        <Header />
        
          <Route exact path='/' component={Homepage} />
          <Route exact path='/AboutMe' component={AboutMe} />
          <Route exact path='/Projects' component={Projects} />
          <Route exact path='/Resume' component={Resume} />

      </div>
      </Router>
    );
  }
}

export default App;
