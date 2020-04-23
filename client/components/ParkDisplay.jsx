import React, { Component } from 'react';
import { connect } from 'react-redux';

// mapStateToProps
const mapStateToProps = state => ({
  fullName: state.park.fullName,
  city: state.park.city,
  stateCode: state.park.stateCode,
  description: state.park.description,
  weather: state.park.weather,
  images: state.park.images,
  activities: state.park.activities,
  
})

class ParkDisplay extends Component {
  render() {
    return (
      <div id="parkDisplayContainer">
        <h1>{this.props.fullName}</h1>
        <h3>{this.props.city}, {this.props.stateCode}</h3>
        <img id="parkDisplayImage" src={this.props.images}/>
        <ul>
          <li className="parkItem" id='description'>Description: {this.props.description}</li>
          <li className="parkItem"id='weather'>Weather: {this.props.weather}</li>
          <li className="parkItem" id='activities'>Activities: {this.props.activities}</li>
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(ParkDisplay);