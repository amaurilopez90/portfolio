import React, { Component } from 'react';
import {elastic as Menu} from 'react-burger-menu';

class BurgerMenu extends Component{
    constructor (props) {
        super(props)
        this.state = {
          menuOpen: false
        }
      }
    
      // This keeps your state in sync with the opening/closing of the menu
      // via the default means, e.g. clicking the X, pressing the ESC key etc.
      handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
      }
      
      // This can be used to close the menu, e.g. when a user clicks a menu item
      closeMenu () {
        this.setState({menuOpen: false})
      }
    
      // This can be used to toggle the menu, e.g. when using a custom icon
      // Tip: You probably want to hide either/both default icons if using a custom icon
      // See https://github.com/negomi/react-burger-menu#custom-icons
      toggleMenu () {
        this.setState({menuOpen: !this.state.menuOpen})
      }

    render(){
        return(
            <div>
                
                <Menu className="burgerMenu" 
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
                right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>

                    <h2 className="bm-item">
                        <span>Amauri Lopez</span>
                    </h2> 
                    
                    <a className="bm-item" href="/" onClick={() => this.closeMenu()}>Home</a>
                    <a className="bm-item" href="/AboutMe" onClick={() => this.closeMenu()}>About Me</a>
                    <a className="bm-item" href="/Projects" onClick={() => this.closeMenu()}>Projects</a>
                    <a className="bm-item" href="https://standardresume.co/amaurilopez" onClick={() => this.closeMenu()}>Resume</a>
                    

                </Menu>


            </div>
        );
    }

}

export default BurgerMenu;