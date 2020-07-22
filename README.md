# AirPnP

![home page](https://i.imgur.com/lLaZ4Ux.jpg)
![national parks near you](https://i.imgur.com/pcMTHjn.png)

/******  APIs *******/
* Used Google Maps API and goole-maps-react to render the Maps component. 
  * More info: https://www.npmjs.com/package/google-maps-react
  * You will have to get a personal Google API for this app. Read about how to get it here: https://developers.google.com/maps/documentation/javascript/get-api-key

* Used NPS.gov API to get Nationl Parks info from NPS.
  * You'll have to get a personal NPS API here: https://www.nps.gov/subjects/developer/get-started.htm


/****** Google Maps component *******/
* Rendered <Maps/> within <MapContainer/>.
* Note that <Maps/> has a default prop "google".
* Exported the component within GoogleApiWrapper.


/****** Get All the Park Info *******/
* [ Base URL: developer.nps.gov/api/v1 ]
* Send GET request to /parks
  * Be careful, if you don't limit the number of results, NPS.gov's response can be very slow.
* Save parks info in PostgreSQL.
* Upon page load, retrieve the parks info from database and save to Redux store.


/****** Generate Markers on the Map *******/
* Each marker is generated from a "park" in parksList array (stored in state (Redux store)).
* Each marker has an onClick listener that triggers a GET request to server with the (single) park code in request query.
* Upon getting the response from NPS.gov, a <Park/> component is rendered by <App/>.
