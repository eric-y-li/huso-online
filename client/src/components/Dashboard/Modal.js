import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from "@material-ui/core";



const Modal = ({ description, onCloseModal, openModal, title, isUser, onModalButtonClick }) => {


  return(
  <Dialog
    open={openModal}
    onClose={onCloseModal}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {description}
      </DialogContentText>
    </DialogContent>
    
    <DialogActions>
      <Button onClick={onModalButtonClick} 
        color="primary">
        {isUser ? "I DON'T WANT EVENT" : "I WANT THIS EVENT"}
      </Button>
    </DialogActions>
  </Dialog>
  )};

Modal.propTypes = {
  description: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

export default Modal;
