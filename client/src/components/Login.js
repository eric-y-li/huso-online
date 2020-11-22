import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import logo from './HUSO-logo.png';
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = (theme) => ({
    root: {
      flexGrow: 1,
    },
    input: {
        color: "black",
    },
  });

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordConfirm: '',
            error: null
        }
    }


    render() {
        const { classes } = this.props;
        return(
            <div>
                <Grid container style ={{ minHeight: '100vh'}}>
                    <Grid item xs = {12} sm={6}>
                        <img src="https://i.imgur.com/11URhPN.png"
                        style ={{ width:"100%", height: "100%", objectFit: "cover"}}
                        alt = "my_best_friend"
                        />
                    </Grid>
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
                            minWidth: 300,
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
                                        label = "Username" 
                                        margin="normal"/>
                            <TextField label = "Password" margin="normal"/>
                            <div style={{ height: 20}} /> 
                            <Button color = "primary" variant = "contained">
                                Log in
                            </Button>
                            <div style={{ height: 20}} /> 
                            <Link to = {{pathname: '/signup'}}>
                                <Button>
                                    Sign up!
                                </Button>
                            </Link>
                            <div style={{ height: 20}} /> 
                        </div>
                        <div />
    
                    </Grid>
                </Grid>
            </div>
        )
    }
    
}

export default withStyles(styles, {withTheme: true})(Login);