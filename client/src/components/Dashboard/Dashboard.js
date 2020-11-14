import React, { Component } from "react";
import Modal from "./Modal";
import Scenario from "./Scenario";
import { Grid } from '@material-ui/core';
import List from '@material-ui/core/List';

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
  state = { description: "", openModal: false, title: "" };

  handleOpenModal = ({ description, title }) => {
    this.setState({ description, openModal: true, title });
  };

  handleCloseModal = () => {
    this.setState({ openModal: false });
  };

  render = () => (
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
      <Modal {...this.state} onCloseModal={this.handleCloseModal} />
    </Grid>
  );
}

export default Dashboard;
