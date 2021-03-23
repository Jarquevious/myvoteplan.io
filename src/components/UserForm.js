/* eslint-disable default-case */
import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails';


export class UserForm extends Component {
    state = {
        step: 1,
        firstName:'',
        lastName:'',
        email:'',
        telephone:'',
    }

    // Proceed to next Step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }
    // Go back 1 step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    // Handle Fields Change
    handleChange = input => e => {
        this.setState({ [ input ]: e.target.value });
      };    

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, telephone } = this.state;
        const values = { firstName, lastName, email, telephone };

        switch(step) {
            case 1:
                return (
                    <FormUserDetails 
                    nextStep = {this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                );
            case 2:
                return (
                <FormPersonalDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
                );
            case 3: 
                return <h1>Confirm</h1>
            case 4:
                return <h1>Success</h1>
        }  
    }
}

export default UserForm
