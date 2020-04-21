import * as types from '../constants/actionTypes.js';


const initialState = {
  loggedInUser: '',

  // State for all Markers
  toggle: false,
  parksList: [],
  // State for Individual City
  showPark: false,
  fullName: '',
  description: '',
  weather: '',
  images: ''
}

const parkReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.LOGGED_IN_USER:
      // console.log('Triggered LOGGED_IN_USER in reducer.')
      return {
        ...state,
        loggedInUser: action.payload,
      };

    case types.TOGGLE:
      let toggle = !state.toggle;

      return {
        ...state,
        toggle,
      };

    case types.MARKER:

      const markerData = action.payload;

      const parksList = [];

      for (let element of markerData) {
        const markerState = {
          name: element.name,
          code: element.code,
          position: {
            lat: element.latitude,
            long: element.longitude,
          },
        }
        parksList.push(markerState);
      }


      return {
        ...state,
        parksList
      }

    // specificPark render reducer
    // get data from fetch request to manipulate our state
    // also toggle?
    case types.PARKINFO:
      const parkData = action.payload
      const fullName = parkData.fullName;
      const description = parkData.description;
      const weather = parkData.weather;
      const images = parkData.images;
      let showPark = true;

      return {
        ...state,
        fullName,
        description,
        weather,
        images,
        showPark
      }

    default:
      return state
  }

}



export default parkReducer;