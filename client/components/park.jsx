import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

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

