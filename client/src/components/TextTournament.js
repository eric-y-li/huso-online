import React from 'react';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

function ChangeId(props) {
    return(
    <div className="timeline-item"> 
      <div>
        <Button onClick={() => props.setActiveTitle(props.tournamentID)}>
            Click me!
        </Button>
      <Typography display ='block'
        color ="primary">
        {props.title}
      </Typography>
      </div>
    </div>
    )
  }

export default function TextTournament(props) {
    const [activeTitle, setActiveTitle] = React.useState('BLANK');
    const [tournamentID, setTournamentID] = React.useState('BLANK');
    const [userId, setUserID] = React.useState('BLANK');


    return(
        <div>
            <TextField 
                variant = "filled"
                label = "Tournament ID"
                placeholder = "my_tournament_1234"
                onChange ={(event) => {setTournamentID(event.target.value)}}/>
            <TextField 
                variant = "filled"
                label = "User ID"
                placeholder = "i_am_player_one"
                onChange ={(event) => {setUserID(event.target.value)}}/>
            <ChangeId title = {activeTitle}
                setActiveTitle={setActiveTitle}
                tournamentID ={tournamentID}/>
        </div>
    )

}
