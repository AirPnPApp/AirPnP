const db = require('../models/parkModels.js');

const userController = {};

// POST /signup to Sign Up User
userController.signUp = (req, res, next) => {
  const signupQuery = `
    INSERT INTO users (username, password)
    VALUES($1, $2);`

    const username = req.body[0]
    const password = req.body[1]
    const user = [username, password];

    if (!username || !password) return next("null fields submitted");
    
    db.query(signupQuery, user)
      .then(userData => {
        res.locals.user = user;
        next();
      })
      .catch(err=>(next("error in signup middleware, bro")))
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
  const checkUser = 
  `SELECT * FROM users WHERE username = $1 and password = $2`
  
  const username = req.query.info[0]
  const password = req.query.info[1]
  const user = [username, password]


  db.query(checkUser, user)
    .then(userData => {
      if (userData.rows.length !== 0) {
        let foundData = userData.rows[0]
        res.locals.foundUser = foundData;
        next();
      } else { 
        return res.status(400).json("verifyLoginUser did not find existing username, dude")
      }
    })
    .catch((err)=> next("error in verifyLoginUser, dude"))
}


module.exports = userController;