import React, { Component } from 'react';
import { Route} from 'react-router-dom';

//Components
import Homepage from './Components/pages/homePage';
import Resume from './Components/pages/resume';
import AboutMe from './Components/pages/aboutPage';
import Projects from './Components/pages/projectsPage';

//Set up routes to component pages
class Routes extends Component{
    render(){
        return(
               <div className = "Routes">     
                <Route exact path='/' component={Homepage} />
                <Route exact path='/AboutMe' component={AboutMe} />
                <Route exact path='/Projects' component={Projects} />
                <Route exact path='/Resume' component={Resume} />
                </div> 
        );
    }
}
export default Routes;

