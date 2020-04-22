import React, { Component } from 'react';
import { connect } from 'react-redux';

// mapStateToProps
const mapStateToProps = state => ({
  fullName: state.park.fullName,
  images: state.park.images,
  city: state.park.city,
  stateCode: state.park.stateCode
  // closestThree: state.park.closestThree
})


// pull out the pieces of state that we want to render for specific park data


class Park extends Component {
  render() {
    // for loop to push in three Park Cards
    // const parkCardArray = [];
    // for (let i = 0; i < this.state.closestThree.length; i++) {
    //   parkCardArry.push(<FeedItem key={i} id={i} />);
    // }

    return (
      <div id='Park'>
        <ul>
          <h2>{this.props.fullName}</h2>
          <img id="image" src={this.props.images}></img>
          <h4>{this.props.city}, {this.props.stateCode}</h4>
        </ul>
      </div >
    )
  }
}


export default connect(mapStateToProps, null)(Park);