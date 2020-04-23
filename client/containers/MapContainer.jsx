import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Park from '../components/park.jsx'
import * as actions from '../actions/actions';
import { connect } from 'react-redux';



// The <Marker /> component accepts a position prop that defines the location for the position on the map. 
// It can be either a raw object or a google.maps.LatLng() instance.
const containerStyle = { 
  width: '50%',
  height: '50%'
}


const mapStateToProps = state => ({
  parksList: state.park.parksList,
  toggle: state.park.toggle,
  showPark: state.park.showPark,
  location: state.park.location,

})

const mapDispatchToProps = dispatch => ({
  triggerToggle: () => dispatch(actions.toggle()),
  fetchMarkers: () => dispatch(actions.fetchMarkers()),
  fetchParkInfo: (parkCode) => dispatch(actions.fetchParkInfo(parkCode)),
})

class MapContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
      return (
          <Map
            id="map"
            google={this.props.google}
            containerStyle={containerStyle}
            initialCenter={{
              lat: this.props.location[0],
              lng: this.props.location[1]
            }}
            zoom={11}
          >
          </Map >
      )
    }
  }


const Connected = connect(mapStateToProps, mapDispatchToProps)(MapContainer);

export default GoogleApiWrapper({
  apiKey: process.env.MAPS_API_KEY
})(Connected) 
// export default GoogleApiWrapper({
//   apiKey: process.env.MAPS_API_KEY
// })(MapContainer) 
