import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormContainer = styled.div`
    position: relative;
    display: inline-block;
    left: 34%;
    background-color: rgb(255, 251, 202);
    margin: 20px 5px 20px 5px;
    border: 2px solid #424242;
    padding: 20px;

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
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        
    }

    componentDidUpdate = () =>{
        this.checkForEmptyFields();
    }

    get(id){
        return document.getElementById(id);
    }

    updateField(field, value) {
        this.setState({ [field]: value });
    }

    checkForEmptyFields = () =>{
        if(this.state.name=='' || this.state.email =='' || this.state.message ==''){
            this.get('submitButton').disabled = true;
        } else{
            this.get('submitButton').disabled = false;
        }
    }

    validateEmail(email){
        var validated = true;

        //Check for valid email using regular expression
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(email).toLowerCase())){
            validated = false;
            console.log("invalid email");
            window.alert('Please enter a valid email address');
            this.get('email').style.color = "Red";
        } 

        return validated;


    }

    submitForm = () =>{
        const recipient = `mailto:${this.props.targetEmail}`;
        const subject = '?subject=Interested%20Viewer%20From%20Your%20Portfolio';
        const body = this.state.message + "\n My Preferred Contact Address is: " + this.state.email;
        const encodedBody = `&body=${encodeURIComponent(body)}`;

        if(this.validateEmail(this.state.email)){
            window.location.href = recipient+subject+encodedBody;
        }
    }

    render() {

        return (
            <FormContainer>
                <div id="contactForm">
                    <FieldContainer>
                        <div><p><input id="name"  placeholder="Name" onChange={(e) => this.updateField('name', e.target.value)} value={this.state.name} required /></p></div>
                        <div><p><input id="email" placeholder="Preferred Contact Email" type="email" onChange={(e) => this.updateField('email', e.target.value)} value={this.state.email} required /></p></div>
                        <div><p><textarea id="message" placeholder="Message" rows="5" onChange={(e) => this.updateField('message', e.target.value)} value={this.state.message} required /></p></div>
                        <button id="submitButton" onClick={this.submitForm} >Contact Me</button>
                    </FieldContainer>
                </div>
            </FormContainer>
        );
    }
}
