// import React from 'react';
// import Login from './login.jsx'
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';


// // import '../../style.css'
// const mapStateToProps = state => ({
//   loggedInUser: state.park.loggedInUser,
//   showPark: state.park.showPark,
// });

// class Nav extends React.Component {
//   constructor(props) {
//     super(props)
//   }
  
//   Render() {
//     if (this.props.loggedInUser.length > 0) {
//     return (
//       <nav>
//       <Link style={linkStyle} to='/home'>
//         <h1>🌲  Parks Planner  🌲</h1>
//       </Link>
//       <div className="welcomeContainer">
//         <h2>Hello, {this.props.loggedInUser} ! </h2>
//       </div>
//     </nav>
//     )
//    } else {
//     <nav>
//       <Link style={linkStyle} to='/home'>
//         <h1>🌲  Parks Planner  🌲</h1>
//       </Link>
//      <div id="loginContainer">
//        <Login />
//      </div>
//     </nav>
//    }
//   }
// }
  
// export default connect(mapStateToProps, mapDispatchToProps)(Nav);

// const linkStyle = {
//   'textDecoration': 'none',
// }

// // import * as actions from '../actions/actions';

// // const mapDispatchToProps = dispatch => ({
// //   signUp: ([username, password]) => dispatch(actions.signUp([username, password])),
// //   logIn: ([username, password]) => dispatch(actions.logIn([username, password]))
// // });

// {/* <form className="signinContainer" onSubmit={(e) => {
//   e.preventDefault();
//   props.logIn([e.target.childNodes[2].value,
//   e.target.childNodes[4].value])
// }}>
//   <div className="inputDiv" id="signInDiv">
//     <label>Username: </label>
//     <input type="text" name="user" placeholder="username..." onChange={(event) => {this.setState({
//         email: event.target.value})}}/>
//   </div> 
//   <div className="inputDiv" id="passwordDiv">
//     <label>Password: </label>
//     <input type="password" name="password" placeholder="password..."/>
//   </div> 
//   <button type="submit">Sign In</button>
// </form> */}