import React, { Component } from 'react';
import { connect } from 'react-redux';

// mapStateToProps
const mapStateToProps = state => ({
  fullName: state.park.fullName,
  description: state.park.description,
  weather: state.park.weather,
  images: state.park.images,
})

class ParkDisplay extends Component {
  render() {
    return (
      <div id="parkDisplayContainer">
        <h1>{this.props.fullName}</h1>
        <img id="parkDisplayImage" src={this.props.images}/>
        <ul>
          <li id='description'>{this.props.description}</li>
          <li id='weather'>{this.props.weather}</li>
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(ParkDisplay);