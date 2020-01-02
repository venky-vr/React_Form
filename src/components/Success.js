import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class Success extends Component {

    constructor(props) {
        super(props);

    }

    continue = e => {
        e.preventDefault();
        
        //Process Form

        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {


        return (
            <MuiThemeProvider>
              <>
                <AppBar title="Success"/>
                <h1>Thank You For Your Submission</h1>
                <p>You will get an email with further instructions.</p>
              </>
            </MuiThemeProvider>
        );
    }
}

export default  Success 
    