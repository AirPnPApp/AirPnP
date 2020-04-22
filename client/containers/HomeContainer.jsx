import React from 'react';
import Connected from './MapContainer.jsx';
import MapContainer from './MapContainer.jsx';
import Park from '../components/park.jsx';
import Login from '../components/login.jsx';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// (Optional) import stylesheet here.
// import '../stylesheets/styles.scss';


const mapStateToProps = state => ({
  loggedInUser: state.park.loggedInUser,
  showPark: state.park.showPark,
});


class HomeContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return(
        <Router>
        <div id='main'>
          <h1>🌲  Parks Planner  🌲</h1>
          <Link to="/signup">Sign Up / Log-in</Link>
            <Switch>
              <Route path="/signup">
                <Login />
              </Route>
              <Route path="/">
                    <div  id="innerBox">
                      {this.props.showPark ?
                        <Park />
                        : <div id="innerBox"><b>Select a park to view info!</b></div>}
                    </div>
                      <MapContainer />
              </Route>
            </Switch>
        </div>
      </Router >
    )
  }
}
// ------------------------------------------------------------------------------



export default connect(mapStateToProps, null)(HomeContainer);
