const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize')

const User = require('../models/User');
const checkAuth = require("../middlewear/check-auth");

users.use(cors())

process.env.SECRET_KEY = 'secret'

users.get('/',(req, res, next) => {
  User.findAll() //find all data
 
  
  // .select() //this is what field ik fetch
 
  .then(doc =>{
      const responce = {
          count : doc.length,
          product : doc

      };
 

  res.status(200).json(doc);
  
})
.catch(err=>{
  console.log(err);
  res.status(500).json({
      error: err
  });

});
      
  
});

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

users.get('/:client_id', (req, res) => {
  User.findAll({
    where: {
      client_id: req.params.client_id
     
    }
    
  })
  .then(doc =>{
    const responce = {
        count : doc.length,
        product : doc

    };


res.status(200).json(doc);

})
.catch(err=>{
console.log(err);
res.status(500).json({
    error: err
});

});
    

});
// users.post('/getScreens_by_user', (req, res) => {
//   var id = req.body.id
//   var sqlquery;
//   if (id == 0) {
//     sqlquery = `SELECT client_id,id , name, url FROM screens`
//   } else {
//     sqlquery = `SELECT  t4.client_id,t4.id , t4.name, t4.url FROM role_screens t2 INNER JOIN user_roles t1 ON t1.role_id = t2.ROLE_ID INNER JOIN users t3 ON t1.USER_ID = t3.ID INNER JOIN screens t4 ON t2.SCREEN_ID = t4.ID where t3.id  = ${id}`
//   }
//   db.sequelize.query(sqlquery)
//     .spread((results, metadata) => {
//       res.send({ data: metadata })
//     })
// })


module.exports = users
