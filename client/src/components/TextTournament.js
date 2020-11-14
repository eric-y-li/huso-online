import React from 'react';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

export default class TextTournament extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        tournamentId: "",
        userId: ""
      }
    }

    handleTournamentIdChange = (event) => {
      this.setState(
        {
          tournamentId: event.target.value
        }
      );
    }

    handleUserIdChange = (event) => {
      this.setState(
        {
          userId: event.target.value
        }
      );
    }

    handleSubmit = (event) => {
      this.setState(
        {
          title: this.state.tournamentId
        }
      );
      // Do stuff with firebase (to be implemented)
    }

    render = () => {
      return(
        <div>
            <TextField 
                variant = "filled"
                label = "Tournament ID"
                placeholder = "my_tournament_1234"
                onChange = {this.handleTournamentIdChange}/>
            <TextField 
                variant = "filled"
                label = "User ID"
                placeholder = "i_am_player_one"
                onChange ={this.handleUserIdChange}/>
            <Button onClick = {this.handleSubmit}>Submit</Button>
            <Typography display ='block'
              color ="primary">
              {this.state.title}
            </Typography>
        </div>
      );
    }

}
