import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CompetitorForm from './components/CompetitorForm.js';
import TextTournament from './components/TextTournament.js';



// Putting a component here will let you see how it looks to test!
ReactDOM.render(
  <React.StrictMode>
    <CompetitorForm />

    <TextTournament />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
