import React, {Component} from 'react';
import Waypoint from 'react-waypoint';

//This class serves as a component state, telling us whether or not the component is in view of the user
//Uses react-waypoint

//Wrap other components within this to do something
//Example:
/* <WhenInView>
          {({ isInView }) => 
            <Revealp hide={!isInView}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Revealp>
          }
        </WhenInView> */
        
class WhenInView extends Component{
    constructor(props){
        super(props)
        this.state = {
            isInView: false
        };

        this.onEnter = this.onEnter.bind(this);
    }
    onEnter({ previousPosition }){
        if(previousPosition === Waypoint.below){
            this.setState({
                isInView: true
            });
        }
    }
    render(){
        return(
            <div>
                <Waypoint onEnter={this.onEnter}></Waypoint>
                {this.props.children({ isInView: this.state.isInView})}
            </div>
        );
    }
}

export default WhenInView;