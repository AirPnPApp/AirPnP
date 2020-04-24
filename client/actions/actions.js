import * as types from '../constants/actionTypes';
import axios from 'axios';
const GEO_LOCATION_KEY = process.env.GEO_LOCATION_KEY;
import locationHelper from '../locationHelper';

export const toggle = () => ({
  type: types.TOGGLE,
});

// Marker for markers rendering on Google Maps -----------------
export const setMarker = (markerData) => ({
  type: types.MARKER,
  payload: markerData,
});

// Fetch Request for "marker" ^
// https://blog.logrocket.com/data-fetching-in-redux-apps-a-100-correct-approach-4d26e21750fc/

export const fetchMarkers = () => {
  return (dispatch) => {
    return axios.get('/getparks').then((markerData) => {
      dispatch(setMarker(markerData.data));
    });
  };
};
// ---------------------------------------------------------------

// Render specific park information on park component ------------
export const parkInfo = (parkData) => ({
  type: types.PARKINFO,
  payload: parkData,
});

// Fetch request for specific park information
export const fetchParkInfo = (parkCode) => {
  return (dispatch) => {
    return axios.get('/getparks/park', parkCode).then((parkData) => {
      // console.log('actions/actions.js/39 - parkData:', parkData.data) // Checking the data type
      dispatch(parkInfo(parkData.data));
    });
  };
};
// ---------------------------------------------------------------

// Actions for sign-up/log-in:
export const signUp = (signUpInfo) => {
  return (dispatch) => {
    return axios.post('/signup', signUpInfo).then((res) => {
      // console.log('Sign-up successful.', 'res.data in actions.js:', res.data[0])
      dispatch(LOGGED_IN_USER(res.data[0]));
    });
  };
};

export const LOGGED_IN_USER = (loggedInUserData) => ({
  type: types.LOGGED_IN_USER,
  payload: loggedInUserData,
});

export const logIn = (logInInfo) => {
  console.log(logInInfo)
  return (dispatch) => {
    return axios.post('/login',  { username: logInInfo[0], password: logInInfo[1]  }).then((res) => {
      dispatch(LOGGED_IN_USER(res.data.username));
    });
  };
};

// ---------------------------------------------------------------
// Two below update location
export const SET_LOCATION = (closestThree, location, locationString) => ({
  type: types.SET_LOCATION,
  location: location,
  closestThree: closestThree,
  locationString,
});

export const setLocation = (location) => {
  return (dispatch) => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${GEO_LOCATION_KEY}`)
    .then(res => res.json())
    .then(data => {
      const { lat, lng } = data.results[0].geometry.location;
      const locationString = data.results[0].formatted_address;
      const closestThree = locationHelper([lat, lng]);
      dispatch(SET_LOCATION(closestThree, [lat, lng], locationString));
    })
  }
};

// ---------------------------------------------------------------
// Two below do fetch to nps
export const SET_PARKS = (closestThree) => ({
  type: types.SET_PARKS,
  closestThree: closestThree,
});

export const setParks = (closestThree) => {
  console.log(closestThree)
  return (dispatch) => {
    return fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${closestThree.join()}&api_key=${process.env.NPS_API_KEY}`)
      .then(res => res.json())
      .then(parsed => {
        dispatch(SET_PARKS(parsed.data))
        dispatch(toggle())
      // .catch(err => console.log('error in nps fetch in actions'))
    })
  };
};



