import React from 'react';
// import '../../style.css'
import { Link } from 'react-router-dom'

const mapStateToProps = state => ({
  loggedInUser: state.park.loggedInUser,
  showPark: state.park.showPark,
});

class Nav extends React.Component {
  constructor(props) {
    super(props)
  }
  
  Render() {
    if (this.props.loggedInUser.length > 0) {
    return (
      <nav>
      <Link style={linkStyle} to='/home'>
        <h1>🌲  Parks Planner  🌲</h1>
      </Link>
      <div className="welcomeContainer">
        <h2>Hello, {this.props.loggedInUser} ! </h2>
      </div>
    </nav>
    )
   } else {
    <nav>
      <Link style={linkStyle} to='/home'>
        <h1>🌲  Parks Planner  🌲</h1>
      </Link>
      <form className="signinContainer">
        <div className="inputDiv" id="signInDiv">
          <label>Username: </label>
          <input type="text" name="user" placeholder="username..."/>
        </div> 
        <div className="inputDiv" id="passwordDiv">
          <label>Password: </label>
          <input type="password" name="password" placeholder="password..."/>
        </div> 
        <button type="submit">Sign In</button>
      </form>
    </nav>
   }
  }
}
  
export default Nav;

const linkStyle = {
  'textDecoration': 'none',
}