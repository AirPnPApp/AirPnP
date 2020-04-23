import React, { Component } from 'react';
import { connect } from 'react-redux';
import Park from './park.jsx';
import { Link, Route } from 'react-router-dom'
import WeatherBar from './WeatherBar.jsx'

import '../stylesheets/styles.scss';

<Route path ='/park' component={Park} />

const mapStateToProps = state => ({
  mainLocation: state.park.location,
  closestThree: state.park.closestThree,
})

class ParkDisplay extends Component {

  render() {
    const currentPark = this.props.closestThree[this.props.location.stateLookup];
    return (
      <div id="parkDisplayContainer">
        {/* <WeatherBar location={this.props.mainLocation}/> */}
        <h1>{currentPark.fullName}</h1>
        <img id="parkDisplayImage" src={currentPark.images[0].url}/>
        <ul>
          <li className="parkItem" id='description'>{currentPark.description}</li>
          <li className="parkItem"id='weather'>{currentPark.weather}</li>
        </ul>
      </div>
    )
  }
}


export default connect(mapStateToProps, null)(ParkDisplay);