import React from 'react';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

function ChangeId(props) {
    return <div className="timeline-item"> 
      <div >
      <Typography display ='block'
        color ="primary" >
        {props.title}
      </Typography>
      </div>
       </div>
  }

class TextTournament extends React.Component {
    constructor(props) {
        super(props);
        // unused at the moment - feel free to incorporate or modify
        this.state = {
            tournamentId: "",
            userId: ""
        }
    }


     _handleTournamentIdChange = (e) => {
        this.setState({
            tournamentId: e.target.value
        });
     }

    _handleUserIdChange = (e) => {
        this.setState({
            userId: e.target.value
        }, () => {console.log(this.state.userId)});

    }

    render() {
        return(
            <div>
                <TextField 
                    variant = "filled"
                    label = "Tournament ID"
                    placeholder = "my_tournament_1234"
                    onChange ={this._handleTournamentIdChange}/>
                <TextField 
                    variant = "filled"
                    label = "User ID"
                    placeholder = "i_am_player_one"
                    onChange ={this._handleUserIdChange}/>
                <ChangeId title = {this.state.tournamentId}
                    setActiveId={this.setState}/>
            </div>
        )
    }
    

}
    

export default TextTournament