import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import logo from './HUSO-logo.png';
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from './Firebase';

const styles = (theme) => ({
    root: {
      flexGrow: 1,
    },
    input: {
        color: "black",
    },
  });

const INITIAL_STATE = {
    email: '',
    password: '',
    passwordConfirm: '',
    error: null
}

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const { username, email, password } = this.state;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
                this.setState({...INITIAL_STATE});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ error });
            })
        event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const { error } = this.state;
        const { classes } = this.props;
        return(
            <div>
                <Grid container style ={{ minHeight: '100vh'}}>
                    <Grid container item xs = {12} sm={6}
                    style = {{padding: 10}}
                    alignItems="center"
                    direction="column"
                    justify="space-between"
                    >
                        <div />
                        
                        <div style = {{
                            display: 'flex', 
                            flexDirection: "column", 
                            maxWidth: 400, 
                            minWidth: 400,
                            }}>
                            <Grid container justify = "center">
                                <img 
                                    src={logo}
                                    width ={200}
                                    alt = "logo"
                                />
                            </Grid>
                            <TextField InputProps={{
                                        className: classes.input,
                                        }} 
                                        label = "Email" 
                                        margin="normal"
                                        name="email"
                                        onChange={this.onChange}/>
                            <TextField label = "Password" margin="normal"
                                       name="password"
                                       onChange={this.onChange}/>
                            <TextField label = "Confirm Password" margin="normal"
                                       name="passwordConfirm"
                                       onChange={this.onChange}/>
                            <div style={{ height: 20}} /> 
                            <Button color = "primary" variant = "contained"
                                    onClick = {this.onSubmit}>
                                Sign Up
                            </Button>
                            {error && <p>{error.message}</p>}
                        </div>
                        <div />
    
                    </Grid>
    
                </Grid>
            </div>
        )
    }
    
}

const SignUpForm = withRouter(withFirebase(withStyles(styles, {withTheme: true})(SignUp)));

export default SignUpForm;