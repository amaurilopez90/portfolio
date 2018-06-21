import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

//make sure everything that is deployed are minified css files
import './Assets/css/default.min.css';

//Components
import Header from './Components/headerComponents/header';
import Homepage from './Components/pages/homePage';
import Contact from './Components/pages/contact';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        
        <Route exact path='/' component={Homepage} />
        <Route exact path='/Contact' component={Contact} />

      </div>
      </Router>
    );
  }
}

export default App;
