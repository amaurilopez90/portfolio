import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Revealp } from '../specialStyling/revealAnimation';
import WhenInView from '../specialStyling/whenInView';

const FormContainer = styled.div`
    position: relative;
    display: inline-block;
    left: 17.5%;
    width: 63%;
    background-color: rgb(255, 251, 202);
    margin: 20px 5px 20px 5px;
    border: 20px solid #424242;
    padding: 20px;
    color: #5A6D87;
    @media(max-width: 1024px){
        transform: scale(0.9);
    }

`;

const FieldContainer = styled.div`
    position: relative;
    text-align: center;
    display: inline-block;
    margin: 2px;
`;

export default class ContactForm extends Component {
    static propTypes = {
        targetEmail: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        };

        this.updateField = this.updateField.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.checkForEmptyFields = this.checkForEmptyFields.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.updateSubmitButton = this.updateSubmitButton.bind(this);
    }

    get(id){
        return document.getElementById(id);
    }
    
    updateField(field, value) {
        this.setState({ [field]: value });
    }
    
    checkForEmptyFields = () =>{
        return(this.state.name=="" || this.state.email == "" || this.state.message == "");
    }

    updateSubmitButton = () =>{
        //Update state of submit button
        var button  = this.get('submitButton');

        if(this.checkForEmptyFields()){
            button.style.color = "#424242";
            button.style.backgroundColor = '#AD2626';
        } else{
            button.style.color = '#1DD3CC';
            button.style.backgroundColor = '#FFF689';
        }
    }

    componentDidUpdate = () =>{
        this.updateSubmitButton();
    }
    
    validateEmail(email){
        var validated = true;
        var emailInput = this.get('email');

        //Check for valid email using regular expression
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(email).toLowerCase())){
            validated = false;
            console.log("invalid email");
            window.alert('Please enter a valid email address');
            emailInput.style.color = "Red";
        } else { emailInput.style.color = "#424242"; }

        return validated;
    }

    submitForm = () =>{
        //Cache the state and contact elements
        const { name, email, message } = this.state;
        var labelName = this.get('NameLabel');
        var labelEmail = this.get('EmailLabel');
        var labelMessage = this.get('MessageLabel');

        const validColor = '#5A6D87';
        const invalidColor = "Red"

        //Only proceed if there aren't any empty fields
        if(!this.checkForEmptyFields()){

            //Update Contact UI Labels to correct
            labelName.innerHTML = "Name"; labelName.style.color = validColor;
            labelEmail.innerHTML = "Contact Email"; labelEmail.style.color = validColor;
            labelMessage.innerHTML = "Message"; labelMessage.style.color = validColor;       

            //Only submit if email is validated
            if(this.validateEmail(this.state.email)){

                
                //Set up 'Mailto' app call
                const recipient = `mailto:${this.props.targetEmail}`;
                const subject = '?subject=Interested%20Viewer%20From%20Your%20Portfolio';
                const body = "Hello Amauri,\n\n" + "My name is " + this.state.name + "\n\n" + this.state.message + "\n\n My Preferred Contact Address is: " + this.state.email + "\n\n";
                const encodedBody = `&body=${encodeURIComponent(body)}`;

                //Call mail app
                window.location.href = recipient+subject+encodedBody;
            }
        }else{
            //Update Contact UI Labels

            //Name
            if(name=="") { labelName.innerHTML = "Name (Required)"; labelName.style.color = invalidColor; }
            else { labelName.innerHTML = "Name"; labelName.style.color = validColor; }

            //Email
            if(email=="") { labelEmail.innerHTML = "Contact Email (Required)"; labelEmail.style.color = invalidColor; }
            else { labelEmail.innerHTML = "Contact Email"; labelEmail.style.color = validColor; }

            //Message
            if(message=="") { labelMessage.innerHTML = "Message (Required)"; labelMessage.style.color = invalidColor; }
            else { labelMessage.innerHTML = "Message"; labelMessage.style.color = validColor; }

        }
       
    }

    render() {

        return (
            <FormContainer>
                <div id="contactForm">
                    <FieldContainer>
                        <div className="NameDiv">
                            <WhenInView>
                                {({ isInView }) => 
                                    <Revealp transform={'left'} hide={!isInView} barColor = '#424242' >
                                        <label id="NameLabel">Name</label>
                                        <p><input className="NameField" id="name" onChange={(e) => this.updateField('name', e.target.value)} value={this.state.name} required /></p>
                                    </Revealp>
                                }
                            </WhenInView>
                        </div>
                        <div className="EmailDiv">
                            <WhenInView>
                                {({ isInView }) => 
                                    <Revealp transform={'left'} hide={!isInView} barColor = '#424242' >
                                        <label id="EmailLabel">Contact Email</label>
                                        <p><input className="EmailField" id="email" type="email" onChange={(e) => this.updateField('email', e.target.value)} value={this.state.email} required /></p>
                                    </Revealp>
                                }
                            </WhenInView>
                        </div>
                        <div className="MessageDiv">
                            <WhenInView>
                                {({ isInView }) => 
                                    <Revealp transform={'left'} hide={!isInView} barColor = '#424242' >
                                        <label id="MessageLabel">Message</label>
                                        <p><textarea className="MessageField" id="message" rows="5" onChange={(e) => this.updateField('message', e.target.value)} value={this.state.message} required /></p>
                                    </Revealp>
                                }
                            </WhenInView>
                        </div>
                        <div className = "ContactDiv" style={{zIndex: '1'}}>
                            <WhenInView>
                                {({ isInView }) => 
                                    <Revealp transform={'left'} hide={!isInView} barColor = '#424242' >
                                        <button className="ContactButton" id="submitButton" onClick={this.submitForm} >Contact Me</button>
                                    </Revealp>
                                }
                            </WhenInView>
                        </div>
                    </FieldContainer>
                </div>
            </FormContainer>
        );
    }
}
