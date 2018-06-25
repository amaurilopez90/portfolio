import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

//make sure everything that is deployed are minified css files
import './Assets/css/header.min.css';
import './Assets/css/home.min.css';
import './Assets/css/projects.min.css';

import Routes from './routes';

//Components
 import Header from './Components/headerComponents/header';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Routes />
          <Header />

        </div>  
      </Router>    
    );
  }
}

export default App;
