import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class Header extends Component {
  //When using render(), we should wrap all of our main elements under our div
  render() {
      return (
          <header>
              <nav>
                 <ul>
                     <li className = "first">
                         <Link to="/">Home</Link>
                     </li>
                     <li>
                         <Link to="/AboutMe">About Me</Link>
                     </li>
                     <li>
                         <Link to="/Projects">Projects</Link>
                     </li>
                     <li className = "last">
                         <Link to="/Resume">Resume</Link>
                     </li>
                 </ul>
              </nav>
          </header>
        );
    }
}

export default Header;