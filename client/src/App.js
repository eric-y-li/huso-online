
import './App.css';
import CompetitorForm from './components/CompetitorForm.js';
import TextTournament from './components/TextTournament.js';
import Dashboard from './components/Dashboard.js';
import NavBar from './components/NavBar.js';
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
    </Switch>
    </BrowserRouter>
    <CompetitorForm />
    </div>
  )
}
export default App;
