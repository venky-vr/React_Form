import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



class FormUserDetails extends Component {

    constructor(props) {
        super(props);

    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }


    render() {

        const {values, handleChange} = this.props;

        return (
            <MuiThemeProvider>
              <>
                <AppBar title="Enter User Details"/>
                <TextField
                    hintText="Enter Your First Name"
                    floatingLabelText="First name"
                    onChange={handleChange('firstName')} 
                    defaultValue={values.firstName}
                />
                <br/>
                <TextField
                    hintText="Enter Your Last Name"
                    floatingLabelText="Last name"
                    onChange={handleChange('lastName')} 
                    defaultValue={values.lastName}
                />
                <br/>
                <TextField
                    hintText="Enter Your Email"
                    floatingLabelText="Email"
                    onChange={handleChange('email')} 
                    defaultValue={values.email}
                />
                <br/>
                <RaisedButton
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                />
              </>
            </MuiThemeProvider>
        );
    }
}

export default FormUserDetails;

const styles = {
    button:{
        margin:15
    }
}