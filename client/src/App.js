
import './App.css';
import CompetitorForm from './components/CompetitorForm.js';
import TextTournament from './components/TextTournament.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import SignUpForm from './components/SignUpForm.js';
import NavBar from './components/Navbar/NavBar.js';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from './components/Login.js';


function App() {
  return(
  <div>
  <BrowserRouter>
    <NavBar />
    <Switch>
        <Route path="/login" render={() => <Login/>}/>
        <Route path="/tournament" render ={() => 
        <TextTournament tournamentId = "haha" userId="hoho"/>
        }/>
        <Route path="/dashboard" render={() => <Dashboard/>}/>
        <Route path="/signup" render={() => <SignUpForm/>}/>
    </Switch>
    </BrowserRouter>
    <CompetitorForm />
    </div>
  )
}
export default App;
