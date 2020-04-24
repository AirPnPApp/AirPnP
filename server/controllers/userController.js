const db = require('../models/parkModels.js');
const bcrypt = require('bcrypt')

const saltRounds = 10;

const userController = {};

// POST /signup to Sign Up User
userController.signUp = (req, res, next) => {
  const signupQuery = `
    INSERT INTO users (username, password)
    VALUES($1, $2);`

    const {username, password } = req.body
   
    
    if (!username || !password) return next("null fields submitted");
    
    bcrypt.hash(password, saltRounds, function (err, hash) { 
      const user = [username, hash];
      db.query(signupQuery, user)
        .then(userData => {
          res.locals.user = userData;
          next();
        })
        .catch(err=>(next("error in signup middleware, bro")))
    })
}

userController.verifySignUpUser = (req, res, next) =>{
  const checkUser = 
  `SELECT * FROM users WHERE username = $1`
  
  const username = req.body[0]
  const user = [username]; 

  db.query(checkUser, user)
    .then(userSignUp => {
      if (userSignUp.rows.length === 0) return next();
      if (userSignUp.rows.length > 0) return res.status(400).json("verifySignUp did not find existing username already")
    })
    .catch(err=> next("error in verifySignUpUser, dude"))
}

userController.verifyLoginUser = (req, res, next) =>{
  // console.log(req.body)
  const checkUser = 
  `SELECT * FROM users WHERE username = $1`
  
    const { username, password } = req.body
    // console.log(req.body)
    // console.log(username, password)
  

    const user = [username]

    db.query(checkUser, user)
      .then(userData => {
        console.log(userData)
        if (userData.rows.length !== 0) {
        bcrypt.compare(password, userData.rows[0].password, function(err, result) {
          if (result == true){
            next()
          } else{
            return res.status(400).json("the password didn't match, dude")
          }
        })
        // if (userData.rows.length !== 0) {
        //   let foundData = userData.rows[0]
        //   res.locals.foundUser = foundData;
        //   next();
        } else { 
          return res.status(400).json("verifyLoginUser did not find existing username, dude")
        }
      })
      .catch((err)=> next("error in verifyLoginUser, dude"))
}


module.exports = userController;