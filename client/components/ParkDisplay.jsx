import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Typography, Paper, Input, FormControl, AppBar, makeStyles  } from '@material-ui/core';
import Park from './park.jsx';
import { Link, Route } from 'react-router-dom'


import '../stylesheets/styles.scss';

<Route path ='/park' component={Park} />
// mapStateToProps
const mapStateToProps = state => ({
  fullName: state.park.fullName,
  city: state.park.city,
  stateCode: state.park.stateCode,
  description: state.park.description,
  weather: state.park.weather,
  images: state.park.images,
  activities: state.park.activities,
  closestThree: state.park.closestThree,
})

// Production Code =====================================================================================================
class ParkDisplay extends Component {
  render() {
 const currentPark = this.props.closestThree[this.props.location.stateLookup];
    return (
      <div className="parkContainer">
        <div id="parkDisplayContainer">
            <img id="parkDisplayImage" src="https://www.nps.gov/common/uploads/structured_data/3C82A965-1DD8-B71B-0B42F2CD698E11A7.jpg"/>
          <div className="h1Container">
            <Typography variant="h1">Anacostia National Park</Typography>
          </div>
        </div>
        <div className="parkDisplayText" id="about">
          <Typography variant="h4" style={styles.h4}>About     &nbsp;</Typography>
          <Typography variant="body1" id="description" style={styles.body}>Welcome to Anacostia Park, your neighborhood national park in the heart of Washington, DC!\nEnjoy exercise along the river trail or relax by the water, Anacostia Park is a breath of fresh air and a space to unwind amid a bustling city.</Typography>
        </div>
        <div className="parkDisplayText" id="weather">
          <Typography variant="h4" style={styles.h4}>Weather </Typography>
          <Typography variant="body1" id="description" style={styles.body}>Spring brings mild temperatures and a light breeze along with springtime flower blooms. Summer can be hot and humid. Fall cools down and changing of the seasons brings changing of </Typography>
        </div>
        <div className="parkDisplayText" id="activites">
          <Typography variant="h4" style={styles.h4}>Activites</Typography>
          <Typography variant="body1" id="description" style={styles.body}>Hiking, Biking, Extreme Kiting, Sailing, Rowboating, Meth.</Typography>
        </div>
      </div>
    )
  }
}


export default connect(mapStateToProps, null)(ParkDisplay);

const styles = {
  h4: {
    paddingRight: '64px',
    whiteSpace: 'pre-wrap'
  },
  body: {
    whiteSpace: 'pre-wrap',
    fontSize: '18px',
    lineHeight: '30px',
  },
}

