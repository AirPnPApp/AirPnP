import React from 'react';
import Connected from './containers/MapContainer.jsx';
import MapContainer from './containers/MapContainer.jsx';
import Nav from './components/nav.jsx'
import Park from './components/park.jsx';
import Login from './components/login.jsx';
import ParkDisplay from './components/ParkDisplay.jsx';
import Landing from './components/Landing.jsx';
import Loading from './components/Loading.jsx'
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
import HomeContainer from './containers/HomeContainer.jsx';

const mapStateToProps = state => ({
  loggedInUser: state.park.loggedInUser,
  showPark: state.park.showPark,
  location: state.park.location,
});

const mapDispatchToProps = dispatch => ({
  setLocation: (e) => {
    const input = document.querySelector('#zip-input')
    console.log(input.value)
    e.preventDefault();
    const location = input.value;
    dispatch(actions.setLocation(location))
  },
  
});




class App extends React.Component {
  constructor(props) {
    super(props)
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
            <Nav />
              <Switch>
                <Route path="/" exact component={HomeContainer} />
                <Route path="/park" exact component={ParkDisplay} />
              </Switch>
          </div>
        </Router >
      )
    }
    
    // user is NOT Logged In/ Signed Up
    else return (
      <Router>
        <div id='main'>
          <Link to="/signup">Sign Up / Log-in</Link>
          <Switch>
            <Route path="/" exact component ={HomeContainer} />
            <Route path="/park" exact component={ParkDisplay} />
          </Switch>
        </div>
      </Router >
    )
  }
}
// ------------------------------------------------------------------------------



export default connect(mapStateToProps, mapDispatchToProps)(App);
