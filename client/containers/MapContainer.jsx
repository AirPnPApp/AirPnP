import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Park from '../components/park.jsx'
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import Loading from '../components/Loading.jsx'


// The <Marker /> component accepts a position prop that defines the location for the position on the map. 
// It can be either a raw object or a google.maps.LatLng() instance.
const mapStyles = {
  width: '100%',
  height: '70%'
}
const mapStateToProps = state => ({
  parksList: state.park.parksList,
  toggle: state.park.toggle,
  showPark: state.park.showPark,
  location: state.park.location,
  locationString: state.park.locationString,
})


const mapDispatchToProps = dispatch => ({
  triggerToggle: () => dispatch(actions.toggle()),
  fetchMarkers: () => dispatch(actions.fetchMarkers()),
  fetchParkInfo: (parkCode) => dispatch(actions.fetchParkInfo(parkCode)),
  setParks: () => {dispatch(actions.setParks())},
})

class MapContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.location.length > 0) {
      this.props.setParks()
    }
  }

  render() {
    
    console.log(this.props.toggle)
    if (!this.props.toggle) {
      return (
        <Loading location={this.props.location} locationString={this.props.locationString}/>
      )
    } else {
      return (
        <div
          id="map-container"
          style={{ position: 'relative', width: '50%', height: '60vh' }}
        >
          <Map
            id="map"
            google={this.props.google}
            style={mapStyles}
            initialCenter={{
              lat: 37.0902,
              lng: -95.7129
            }}
            zoom={4}
          >
            
          </Map >
        </div>
      )
    }
  }
}

const Connected = connect(mapStateToProps, mapDispatchToProps)(MapContainer);

export default GoogleApiWrapper({
  apiKey: process.env.MAPS_API_KEY
})(Connected) 
