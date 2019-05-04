import React, { Component } from './node_modules/react';
import CircularProgress from './node_modules/@material-ui/core/CircularProgress';
import { withStyles } from './node_modules/@material-ui/core/styles';

const styles = theme => ({
    buttonProgress: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
});

class ProgressComponent extends Component{
    render(){
        const { classes, size } = this.props;
        return(
                <CircularProgress size={size} className={classes.buttonProgress} />
        );
    }
}

export default withStyles(styles)(ProgressComponent);