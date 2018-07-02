import React, { Component } from 'react'

class SocialMediaBar extends Component{

    render(){
        return(
            <div className="SideBar">
                    <p>FOLLOW AMAURI LOPEZ</p>
            
                <div className="SocialMediaBar">
                    
                    <a className= "facebook" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/amauri.lopez.50">
                        <i className="fa fa-facebook"/>
                    </a>
                    <a className= "instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/amauri64">
                        <i className="fa fa-instagram"/>
                    </a> 
                </div>

            </div>
        );
    }
}

export default SocialMediaBar;