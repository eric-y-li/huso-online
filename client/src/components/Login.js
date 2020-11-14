import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import logo from './HUSO-logo.png';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    input: {
        color: "black",
    },
  }));

export default function Login() {
    const classes = useStyles();

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
                                    label = "Student ID" 
                                    margin="normal"
                                    placeholder="123-456-789"/>
                        <TextField label = "SOMETHING ELSE??" margin="normal"/>
                        <div style={{ height: 20}} /> 
                        <Button color = "primary" variant = "contained">
                            Log in
                        </Button>
                        <div style={{ height: 20}} /> 
                        <Button>
                            Sign up!
                        </Button>
                    </div>
                    <div />

                </Grid>

            </Grid>
        </div>
    )
}