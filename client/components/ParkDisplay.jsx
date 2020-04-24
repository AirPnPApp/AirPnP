import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Typography, Paper, Input, FormControl, AppBar, makeStyles, CardMedia  } from '@material-ui/core';
import Park from './park.jsx';
import { Link, Route } from 'react-router-dom'
import WeatherBar from './WeatherBar.jsx'

import '../stylesheets/styles.scss';

<Route path ='/park' component={Park} />

const mapStateToProps = state => ({
  mainLocation: state.park.location,
  fullName: state.park.fullName,
  city: state.park.city,
  stateCode: state.park.stateCode,
  description: state.park.description,
  weather: state.park.weather,
  images: state.park.images,
  activities: state.park.activities,
  closestThree: state.park.closestThree,
})

class ParkDisplay extends Component {

  render() {
    const currentPark = this.props.closestThree[this.props.location.stateLookup];
    const activities = currentPark.activities.map(activity => {
      return activity.name + ', '
    })
    return (
      <div className="parkContainer">
        <div id="parkDisplayContainer">
          <div className="imgDiv">
            <img id="parkDisplayImage" src={currentPark.images[0].url}/>
          </div>
          <div className="h1Container">
            <Typography variant="h3">{currentPark.fullName}</Typography>
          </div>
        </div>
        <div className="parkDisplayText" id="about">
          <Typography variant="h4" style={styles.h4}>About     &nbsp;</Typography>
          <Typography variant="body1" id="description" style={styles.body}>{currentPark.description}</Typography>
        </div>
        <div className="parkDisplayText" id="weather">
          <Typography variant="h4" style={styles.h4}>Weather </Typography>
          <Typography variant="body1" id="description" style={styles.body}>{currentPark.weatherInfo}</Typography>
        </div>
        <div className="parkDisplayText" id="activites">
          <Typography variant="h4" style={styles.h4}>Activites</Typography>
          <Typography variant="body1" id="description" style={styles.body}>{activities}</Typography>
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

