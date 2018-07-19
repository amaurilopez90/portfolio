import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './button';

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
  constructor(props) {
      super(props);
      this.state = {
          name: '',
          email: '',
          message: '',
      };

      this.updateField = this.updateField.bind(this);
      this.submitForm = this.submitForm.bind(this);
  }

  get(id){
      return document.getElementById(id);
  }

  updateField(field, value) {
      this.setState({ [field]: value });
  }

  submitForm = () =>{

  }

  render() {
    const { formName, formEmail, formMessage } = this.state;

    return (
        <FormContainer>
            <div id="contactForm">
                <FieldContainer>
                    <div><label>Name</label><p><input id="name"  onChange={(e) => this.updateField('name', e.target.value)} value={formName} required /></p></div>
                    <div><label>Email</label><p><input id="email"  type="email" onChange={(e) => this.updateField('email', e.target.value)} value={formEmail} required /></p></div>
                    <div><label>Message</label><p><textarea id="message"  rows="5" onChange={(e) => this.updateField('message', e.target.value)} value={formMessage} required /></p></div>
                    <Button
                        email="amaurilopez90@gmail.com"
                        formValues={this.state}
                    />
                </FieldContainer>
            </div>
        </FormContainer>
    );
  }
}
