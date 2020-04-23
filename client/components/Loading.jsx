import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCog, faColumns } from '@fortawesome/free-solid-svg-icons'
import {CircularProgress, Backdrop, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: 'white',    
  },
}));

const Loading = (props) => {
  const classes = useStyles();
  
  return(
    <div>
      <Backdrop className={classes.backdrop, "backdrop"} open>
        <Typography variant="h4">Loading parks closest to your location...</Typography>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
    
  )
}


export default Loading;