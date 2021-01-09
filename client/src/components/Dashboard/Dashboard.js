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

const sciEventsSystem = [
    {
      title: "Event 1",
      description: "I don't know what we do in this event",
      display: "Good morning",
      isUser: true,
    },
    {
      title: "NEUROLOGY",
      description: "How one becomes peak neurotic",
      display: "My",
      isUser: true,
    },
    {
      title: "Matchometics",
      description: "matching people based on their meth-affinity",
      display: "Name",
      isUser: true,
    },
    {
      title: "asdfl",
      description: "How one becomes peak neurotic",
      display: "Is",
      isUser: true,
    },
    {
      title: "soijfesl",
      description: "matching people based on their meth-affinity",
      display: "Eric",
      isUser: false,
    }
  ];
  

class Dashboard extends Component {

  // the first few items in the state are keeping track of what Scenario has been clicked on
  // and will send this information to the Modal (for dialog stuff)
  // newSciEvent contains the information for the new event
  state = { description: "", openModal: false, title: "", isUser: null,
    newSciEvent: {
      title: '',
      description: '',
      display: '',
    },
    openNewEvent: false
  };
  

  handleOpenModal = ({ description, title, isUser }) => {
    // This sets the react state to be the content of whatever newSciEvent was clicked
    this.setState({ description, openModal: true, title, isUser });
  };

  handleCloseModal = () => {
    this.setState({ openModal: false });

  };

  handleModalButtonClick = () => {
    // loops through all events and changes whether the event is part of the 
    // user's set of events or not.
    sciEventsSystem.forEach( (item,index) => {
      if (item.title == this.state.title){
        item.isUser = !item.isUser;
      }
    } );
    // Using the same operation to close the dialog.
    this.handleCloseModal();
  }

  // For the new scioly event dialog
  handleOpenNewEvent = () => {
    this.setState({ openNewEvent: true});
  };

  handleCloseNewEvent = () => {
    this.setState({ openNewEvent: false});
  };
  // To change the variables while making the new scioly event
  handleChange = name => ({ target: {value}}) => {
    this.setState({
      newSciEvent: {
        ...this.state.newSciEvent,
        [name]: value,
      }
    })
  };
  
  handleSciEventCreate = () => {
    sciEventsSystem.push(this.state.newSciEvent);
    this.setState({
      newSciEvent: {
        title: '',
        description: '',
        display: '',
        isUser: false,
      },
      // In the future, this is the function that will connect to the database!
      // *hopefully
    });
    this.handleCloseNewEvent();
  }
  render(){
    // destructuring these values to place into the props for TextField
    const {title, description, display} = this.state.newSciEvent;

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
        {sciEventsSystem.filter((userSciEvent) => {
          return userSciEvent.isUser
        }).map((props) => (
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
        {sciEventsSystem.filter((userSciEvent) => {
          return !userSciEvent.isUser
        }).map((props) => (
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
    </Grid>
      <Dialog 
      open = {this.state.openNewEvent}
      onClose = {this.handleCloseNewEvent}
      >
        <DialogTitle id="alert-dialog-title">{"Create a new Event"}</DialogTitle>
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
      <Modal {...this.state} onCloseModal={this.handleCloseModal} onModalButtonClick = {this.handleModalButtonClick} />
    </Grid>
  )
  };
}

export default Dashboard;
