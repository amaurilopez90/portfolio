import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
    static propTypes = {
        email: PropTypes.string.isRequired,
        formValues: PropTypes.shape({
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
        }).isRequired,
    };
  
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
        };

        this.logFormDataToConsole = this.logFormDataToConsole.bind(this);
    }
  
    logFormDataToConsole(event) {
        console.log('Form Values', this.props.formValues);
    }
  
    render() {
        const recipient = `mailto:${this.props.email}`;
        const subject = '?subject=Interested%20Client';
        const body = `&body=${this.props.formValues.message}`;
        return (
            <a
                href={`${recipient}${subject}${body}`}
                onClick={this.logFormDataToConsole}
            >
                Contact Me
            </a>
        );
    }
  }
