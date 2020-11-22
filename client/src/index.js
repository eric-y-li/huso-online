import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Dashboard from './components/Dashboard/Dashboard.js';
import TextTournament from './components/TextTournament.js';
import NavBar from './components/NavBar.js';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from './components/Login.js';
import SignUpForm from './components/SignUpForm.js';

import Firebase, { FirebaseContext } from './components/Firebase';

// Putting a component here will let you see how it looks to test!
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>

    <BrowserRouter>
    <NavBar />
    <Switch>
        <Route path="/login" render={() => <Login/>}/>
        <Route path="/tournament" render ={() => 
        <TextTournament tournamentId = "haha" userId="hoho"/>
        }/>
        <Route path="/signup" render={() => <SignUpForm />} />
        <Route path="/dashboard" render={() => <Dashboard/>}/>
    </Switch>
    </BrowserRouter>
    
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
