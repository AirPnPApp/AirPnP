import React from 'react';
import Connected from './containers/mapContainer.jsx';
import MapContainer from './containers/mapContainer.jsx';
import Nav from './components/nav.jsx'
import Park from './components/park.jsx';
import Login from './components/login.jsx';
import ParkDisplay from './components/ParkDisplay.jsx';
import Landing from './components/Landing.jsx';
import * as actions from './actions/actions';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// (Optional) import stylesheet here.
import './stylesheets/styles.scss';

const mapStateToProps = state => ({
  loggedInUser: state.park.loggedInUser,
  showPark: state.park.showPark,
  location: state.park.location,
});

const mapDispatchToProps = dispatch => ({
  setLocation: (e) => {
    e.preventDefault();
    const location = e.target.firstChild.value;
    dispatch(actions.setLocation(location))
  },
  
});




class App extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    // send dispatch to get three closest from nps
    
  }

  render() {
    // CHECKING IF USER IS LOGGED IN/ SIGNED UP --------------------------------
    if (this.props.location === '') {
      return <Landing setLocation={this.props.setLocation}/>
    }
    // User is logged in/ signed up
    if (this.props.loggedInUser.length > 0) {
      return (
        <Router>
          <div id='main'>
            <h1>🌲  Parks Planner  🌲</h1>
            <h2>Hello, {this.props.loggedInUser} ! </h2>
              <Switch>
                <Route path="/">
                  <MapContainer />
                  <div id="innerBox">
                    {this.props.showPark ?
                      <Park />
                      : <div id="innerBox"><b>Select a park to view info!</b></div>}
                  </div>
                </Route>
              </Switch>
          </div>
        </Router >
      )
    }
    
    // user is NOT Logged In/ Signed Up
    else return (
      <Router>
        <div id='main'>
          <h1>🌲  Parks Planner  🌲</h1>
          <Link to="/signup">Sign Up / Log-in</Link>
            <Switch>
              <Route path="/signup">
                <Login />
              </Route>
              <Route path="/">
                <MapContainer />
                <div id="innerBox">
                  {this.props.showPark ?
                    <Park />
                    : <div id="innerBox"><b>Select a park to view info!</b></div>}
                </div>
              </Route>
            </Switch>
        </div>
      </Router >
    )
  }
}
// ------------------------------------------------------------------------------



export default connect(mapStateToProps, mapDispatchToProps)(App);
