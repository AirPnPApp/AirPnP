import React from 'react';
import Nav from './Nav.jsx'
import { Button, Typography, Paper, Input, FormControl, AppBar, makeStyles  } from '@material-ui/core';



const Landing = (props) => {
  return(
    <div className="landingWrapper">
      <Nav />
      <Paper className="landingBox">
        <div className="landingBoxInner">
          <Typography variant="h5">Where are you going next?</Typography>
          <FormControl margin="normal">
            <Input type="text" id="zip-input" placeholder="ENTER ZIP CODE" autoFocus/>
            <Button variant="outlined" type="submit" onClick={props.setLocation}>Submit</Button>
          </FormControl>
        </div>
      </Paper>
    </div>
  )
}


export default Landing;