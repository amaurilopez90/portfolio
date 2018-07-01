import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Routes from './routes';

//make sure everything that is deployed are minified css files
import './Assets/css/header.min.css';
import './Assets/css/home.min.css';
import './Assets/css/projects.min.css';
import './Assets/css/burgerMenu.min.css';

//Components
import Header from './Components/headerComponents/header';
import BurgerMenu from './Components/headerComponents/burgerMenu';

//Really Smooth Scroll
import ReallySmoothScroll from 'really-smooth-scroll';
ReallySmoothScroll.shim();

ReallySmoothScroll.config({
  mousewheelSensitivity: 6.5, // Default
  keydownSensitivity: 6.5 // Default (When you press arrow down/up key)
});

//Listen to a change in routes and scroll to the top of the screen
const history = createBrowserHistory();
history.listen(() => {
  window.scrollTo(0, 0);
});


class App extends Component {  
  render() {
    return (
      <Router history={history}>
        <div className="App">

          <div id="outer-container">

              <BurgerMenu className="BurgerMenu" pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }/>

              <main id="page-wrap" >

                <div className="Main-Background" />
                <Routes />
                <Header />

              </main>
          </div>


        </div>  
      </Router>    
    );
  }
}

export default App;
