import React, { Component } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import ParkDisplay from './ParkDisplay.jsx';

class Park extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Link to={{
        pathname: '/park',
        stateLookup: this.props.stateLookup
      }}>
        <div className='parkCard'>
          <ul>
            <h2>{this.props.fullName}, {this.props.states}</h2>
            <img id="image" src={this.props.images[0].url} width={200} height={200}></img>
          </ul>
        </div >
      </Link>
    )
  }
}
export default Park;

