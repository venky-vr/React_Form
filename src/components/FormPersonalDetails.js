import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



class FormPersonalDetails extends Component {

    constructor(props) {
        super(props);

    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }



    render() {

        const {values, handleChange} = this.props;

        return (
            <MuiThemeProvider>
              <>
                <AppBar title="Enter Personal Details"/>
                <TextField
                    hintText="Enter Your Occupation"
                    floatingLabelText="Occupation"
                    onChange={handleChange('occupation')} 
                    defaultValue={values.Occupation}
                />
                <br/>
                <TextField
                    hintText="Enter Your City"
                    floatingLabelText="City"
                    onChange={handleChange('city')} 
                    defaultValue={values.city}
                />
                <br/>
                <TextField
                    hintText="Enter Your Bio"
                    floatingLabelText="Bio"
                    onChange={handleChange('bio')} 
                    defaultValue={values.bio}
                />
                <br/>
                <RaisedButton
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                />
                <RaisedButton
                label="Back"
                primary={false}
                style={styles.button}
                onClick={this.back}
                />
              </>
            </MuiThemeProvider>
        );
    }
}

export default FormPersonalDetails;

const styles = {
    button:{
        margin:15
    }
}