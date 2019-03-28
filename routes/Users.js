const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize')

const User = require('../models/User');

users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res,next) => {   
  bcrypt.hash(req.body.password,10,(err,hash)=>{
  if(err){
    return res.status(500).json({
       error: err
    });
  } else{   
  const today = new Date()
  const user =new User ({
    name: req.body.name,
    username: req.body.name,
    email: req.body.email,
    password:hash,
    created_at: today
  });
  user
  .save()
  .then(result =>{
    console.log(result);
    res.status(201).json({
      message: "user created"
    });
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json({
      error:err
    })
  })
}
});
});        
users.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
     
    }
    
  })
   .then(user => {
      if (user) {
               if(    bcrypt.compareSync(req.body.password, user.password)
){
  let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
    expiresIn: 1440,
    
  })
  
  res.json({ token: token })
  console.log("sucessful");
}else {
  res.send('PASS INCORRECT')
}
// bcrypt.compare(this.body.password,user.password)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err+password)
    })
})

users.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = users
