import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { Link } from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
  signUp: ([username, password]) => dispatch(actions.signUp([username, password])),
  logIn: ([username, password]) => dispatch(actions.logIn([username, password]))
})

const Login = props => {
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.logIn([e.target.childNodes[2].value,
        e.target.childNodes[4].value])
      }}>
        <h4>If you already have an account, login below:</h4>
        <label>
          Username:
        </label>
        <input type="text" name="name" />
        <label>
          Password:
        </label>
        <input type="text" password="password"/>
        <button type="submit">Submit</button>
      </form>

      <form onSubmit={(e)=>{
        e.preventDefault();
        props.signUp([e.target.childNodes[2].value,
          e.target.childNodes[4].value]
      )}}>
        <h4>Get yourself an account by signing up below:</h4>
        <label>
          Username:
        </label>
        <input type="text" name="name" />
        <label>
          Password:
        </label>
        <input type="text" password="password" />
        <button type="submit">Submit</button>
      </form>


      <Link to="/">Back to the Map</Link>
    </div>

  )
}

export default connect(null, mapDispatchToProps)(Login);