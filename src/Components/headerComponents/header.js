import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class Header extends Component {
  //When using render(), we should wrap all of our main elements under our div
  render() {
      return (
          <header>
          
             <div className = "logo">

               LOGO

             </div>

              <nav>
                 <ul>
                     <li className = "first">
                         <Link to="/">Home</Link>
                     </li>
                     <li className = "last">
                         <Link to="/Contact">Contact</Link>
                     </li>
                 </ul>
              </nav>
          </header>
        );
    }
}

export default Header;