import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AppHeader from './AppHeader'
export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppHeader />
                    <TextField
                        hintText="Enter Your First Name"
                        Label="First Name"
                        onChange={handleChange('firstName')}
                        defaultValues={values.firstName}
                       
                    />
                    <br/>
                    <TextField
                    hintText="Enter Your Last Name"
                    floatingLabelText="Last Name"
                    onChange={handleChange('lastName')}
                    defaultValues={values.lastName}
                    margin="normal"
                    fullWidth
                    />
                    <br/>
                    <TextField
                    hintText="Enter Your Email"
                    floatingLabelText="Email"
                    onChange={handleChange('Email')}
                    defaultValues={values.Email}
                    margin="normal"
                    fullWidth
                    />
                    <br/>
                    <Button
                    label="Continue"
                    primary={true}
                    style={styles.Button}
                    onClick={this.continue}
                    size="Large"
                    />
                </React.Fragment>
            </MuiThemeProvider>
            
        );
    }
}


const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails
