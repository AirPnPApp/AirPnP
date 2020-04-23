import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

// import { connect } from 'react-redux';

// mapStateToProps
// const mapStateToProps = state => ({
//   fullName: state.park.fullName,
//   images: state.park.images,
//   city: state.park.city,
//   stateCode: state.park.stateCode
//   // closestThree: state.park.closestThree
// })


// pull out the pieces of state that we want to render for specific park data
let park = "/park"

class Park extends Component {
  constructor() {
    super()
  }

  handleClick(e){
    console.log(e)
    e.preventDefault();
  }

  render() {
    return (
      <Link to={park}>
        <div id='Park'>
          <ul>
            <h2>{this.props.fullName}</h2>
            <img id="image" src={this.props.images[0].url} width={200} height={200}></img>
            <h4>{this.props.city}, {this.props.stateCode}</h4>
          </ul>
        </div >
      </Link>
    )
  }
}
export default Park;

