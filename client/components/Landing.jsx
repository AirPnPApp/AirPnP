import React from 'react';
import { Button, Typography, Paper, Input, FormControl, AppBar, makeStyles  } from '@material-ui/core';



const Landing = (props) => {
  return(
    <div className="landingWrapper">
      <AppBar position="static" color="default" className="appbar">
        <Typography variant="h3">PARK PLANNER 2.0</Typography>
      </AppBar>
      <Paper className="landingBox">
        <Typography variant="h5">Where are you going next?</Typography>
        <FormControl margin="normal">
          <Input type="text" id="zip-input" placeholder="ENTER ZIP CODE" autoFocus/>
          <Button variant="outlined" type="submit" onClick={props.setLocation}>Submit</Button>
        </FormControl>
      </Paper>
    </div>
  )
}


export default Landing;