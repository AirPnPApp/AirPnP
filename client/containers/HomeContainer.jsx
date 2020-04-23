import React from 'react';
import Connected from './MapContainer.jsx';
import MapContainer from './MapContainer.jsx';
import Park from '../components/park.jsx';
import ParkDisplay from '../components/ParkDisplay.jsx'
import Login from '../components/login.jsx';
import * as actions from '../actions/actions';
import Loading from '../components/Loading.jsx'
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// (Optional) import stylesheet here.
import '../stylesheets/styles.scss';


const mapStateToProps = state => ({
  loggedInUser: state.park.loggedInUser,
  showPark: state.park.showPark,
  location: state.park.location,
  toggle: state.park.toggle,
  locationString: state.park.locationString,
  closestThree: state.park.closestThree,
});

const mapDispatchToProps = dispatch => ({
  setParks: (closestThree) => {dispatch(actions.setParks(closestThree))},
})


class HomeContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.location.length > 0) {
      this.props.setParks(this.props.closestThree)
    }
  }
  
  render() {
    if (!this.props.toggle) {
      return (
        <Loading location={this.props.location} locationString={this.props.locationString}/>
      )
    }
    return(
        <Router>
        <div id='home-main'>
            <Switch>
              <Route path="/signup">
                <Login />
              </Route>
              <Route path="/">
                <div className="div1">
                  {this.props.closestThree.map((park, index) => {
                    return <Park 
                      key={park.fullName + index}
                      fullName={park.fullName}
                      images={park.images}
                      states={park.states}                      
                      description={park.description}
                    />
                  })}                  
                </div>
                <div className="div2">
                  <MapContainer />
                </div>
              </Route>
            </Switch>
        </div>
      </Router >
    )
  }
}
// ------------------------------------------------------------------------------



export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
