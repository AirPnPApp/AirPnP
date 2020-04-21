import React, { Component } from 'react';
import { connect } from 'react-redux';

// mapStateToProps
const mapStateToProps = state => ({
  fullName: state.park.fullName,
  description: state.park.description,
  weather: state.park.weather,
  images: state.park.images,
  showPark: state.park.showPark,

})


// pull out the pieces of state that we want to render for specific park data


class Park extends Component {
  render() {
    return (
      <div id='Park'>
        <ul>
          <h2>{this.props.fullName}</h2>
          <li id='description'>{this.props.description}</li>
          <li id='weather'>{this.props.weather}</li>
          <img id='image' src={this.props.images}></img>
        </ul>

      </div >
    )
  }
}


export default connect(mapStateToProps, null)(Park);