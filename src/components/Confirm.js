import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';



class FormUserDetails extends Component {

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

        const {values:{firstName, lastName, email, occupation, city, bio}} = this.props;

        return (
            <MuiThemeProvider>
              <>
                <AppBar title="Confirm User Details"/>

                <List>
                    <ListItem
                        primaryText="First Name"
                        secondaryText={firstName}
                    />
                     <ListItem
                        primaryText="Last Name"
                        secondaryText={lastName}
                    />
                     <ListItem
                        primaryText="Email"
                        secondaryText={email}
                    />
                     <ListItem
                        primaryText="Occupation"
                        secondaryText={occupation}
                    />
                     <ListItem
                        primaryText="City"
                        secondaryText={city}
                    />
                     <ListItem
                        primaryText="Bio"
                        secondaryText={bio}
                    />
                </List>
                <br/>
                <RaisedButton
                    label="Confirm & Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                />

                <RaisedButton
                    label="Back"
                    primary={false}
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