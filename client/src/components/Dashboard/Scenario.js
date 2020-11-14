import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';


class Scenario extends PureComponent {

    openModal = () => {
      const { description, handleOpenModal, title } = this.props;
      handleOpenModal({ description, title });
    };
  
    render = () => (
      <ListItem button onClick={this.openModal} key={this.props.title}>
      <ListItemAvatar>
        <Avatar >
          <PersonIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={this.props.display} />
      </ListItem>
    );
  }
  
  Scenario.propTypes = {
    description: PropTypes.string.isRequired,
    handleOpenModal: PropTypes.func.isRequired,
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };
  
  export default Scenario;
  