import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class DialogComponent extends Component {
  
  render(){
    const { dialogState, aceptDialog, closeDialog, title, content } = this.props;

    return (
      <div>
        <Dialog
          open={dialogState}
          TransitionComponent={Transition}
          keepMounted
          onClose={closeDialog}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {content}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDialog} color="primary">
              Cancelar
            </Button>
            <Button onClick={aceptDialog} color="primary">
              Aceptar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default DialogComponent;