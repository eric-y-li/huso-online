import React, { Component } from "react";
import Modal from "./Modal";
import Scenario from "./Scenario";
import { Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const sciEventsUser = [
  {
    title: "Event 1",
    description: "I don't know what we do in this event",
    display: "Good morning"
  },
  {
    title: "NEUROLOGY",
    description: "How one becomes peak neurotic",
    display: "My"
  },
  {
    title: "Matchometics",
    description: "matching people based on their meth-affinity",
    display: "Name"
  }
];

const sciEventsSystem = [
    {
      title: "Event 1",
      description: "I don't know what we do in this event",
      display: "Good morning"
    },
    {
      title: "NEUROLOGY",
      description: "How one becomes peak neurotic",
      display: "My"
    },
    {
      title: "Matchometics",
      description: "matching people based on their meth-affinity",
      display: "Name"
    },
    {
        title: "asdfl",
        description: "How one becomes peak neurotic",
        display: "Is"
      },
      {
        title: "soijfesl",
        description: "matching people based on their meth-affinity",
        display: "Eric"
      }
  ];
  

class Dashboard extends Component {
  state = { description: "", openModal: false, title: "",
    sciEvent: {
      title: '',
      description: '',
      display: '',
    },
    openNewEvent: false,
  };

  handleOpenModal = ({ description, title }) => {
    this.setState({ description, openModal: true, title });
  };

  handleCloseModal = () => {
    this.setState({ openModal: false });
  };

  handleOpenNewEvent = () => {
    this.setState({ openNewEvent: true});
  };

  handleCloseNewEvent = () => {
    this.setState({ openNewEvent: false});
  };

  handleChange = name => ({ target: {value}}) => {
    this.setState({
      sciEvent: {
        ...this.state.sciEvent,
        [name]: value,
      }
    })
  };
  
  handleSciEventCreate = () => {
    sciEventsSystem.push(this.state.sciEvent);
    this.setState({
      sciEvent: {
        title: '',
        description: '',
        display: '',
      },
      // In the future, this is what will connect to the database!
    });
    this.handleCloseNewEvent();
  }
  render(){

    const {title, description, display} = this.state.sciEvent;

    return(
    <Grid container>
    <Grid container 
        item xs = {12} sm={6}
        style = {{padding: 10}}
        direction="column"
        alignItems="center">
        
        <h2>User Events</h2>
        <div style={{display: 'flex', 
                    flexDirection: "column", 
                    minWidth:350}}>
        <List>
        {sciEventsUser.map((props) => (
          <Scenario
            key={props.title}
            {...props}
            handleOpenModal={this.handleOpenModal}
          />
        ))}
        </List>
        </div>
    </Grid>
    <Grid container 
    item xs = {12} sm={6}
    style = {{padding: 10}}
    direction="column"
    alignItems="center">
    <h2>Tournament Events</h2>
    <div style={{display: 'flex', 
                flexDirection: "column", 
                minWidth:350}}>
        <List>
        {sciEventsSystem.map((props) => (
          <Scenario
            key={props.title}
            {...props}
            handleOpenModal={this.handleOpenModal}
          />
        ))}
        </List>
    </div>
    </Grid>
    <Grid container>
      <Button onClick={this.handleOpenNewEvent}>
          New Event!!
      </Button>
      <Typography>
          {this.state.sciEvent.title}
      </Typography>
    </Grid>
      <Dialog 
      open = {this.state.openNewEvent}
      onClose = {this.handleCloseNewEvent}
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
        <form>
        <TextField 
          label="Title"
          value={title}
          onChange={this.handleChange('title')} />
          <br/>
          <TextField 
          label = "Description"
          multiline
          rows = "4"
          value={description}
          onChange={this.handleChange('description')} />
          <br/>
          <TextField 
          label="Display"
          value={display} 
          onChange={this.handleChange('display')} />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleSciEventCreate} >
            Create SciOly Event!
          </Button>
        </DialogActions>
      </Dialog>
      <Modal {...this.state} onCloseModal={this.handleCloseModal} />
    </Grid>
  )
  };
}

export default Dashboard;
