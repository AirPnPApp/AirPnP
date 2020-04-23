import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Park from '../components/park.jsx'
import * as actions from '../actions/actions';
import { connect } from 'react-redux';



// The <Marker /> component accepts a position prop that defines the location for the position on the map. 
// It can be either a raw object or a google.maps.LatLng() instance.
const containerStyle = { 
  width: '100%',
  height: '100%'
}


const mapStateToProps = state => ({
  parksList: state.park.parksList,
  toggle: state.park.toggle,
  showPark: state.park.showPark,
  location: state.park.location,
  closestThree: state.park.closestThree,
})

const mapDispatchToProps = dispatch => ({
  triggerToggle: () => dispatch(actions.toggle()),
  fetchMarkers: () => dispatch(actions.fetchMarkers()),
  fetchParkInfo: (parkCode) => dispatch(actions.fetchParkInfo(parkCode)),
  setInfoWindow: (obj) => dispatch(actions.setInfoWindow(obj)),
})

class MapContainer extends Component {
  constructor() {
    super()
  }

  onMarkerClick(e, marker) { 
    console.log(e)
  }

  render() {
      // Create markers
      const markers = this.props.closestThree.map(park => {
        return <Marker key={park.latitude+park.longitude} title={park.fullName}
        name={park.parkCode}
        position={{lat: park.latitude, lng: park.longitude}} onClick={this.onMarkerClick}/>
      })

      return (
          <Map
            // className='myMap'
            flex={2}
            order={3}
            left='150px'
            google={this.props.google}
            style={containerStyle}
            initialCenter={{
              lat: this.props.location[0],
              lng: this.props.location[1]
            }}
            zoom={5}

          >
            {markers}
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
