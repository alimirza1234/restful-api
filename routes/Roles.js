const express = require('express')
const roles = express.Router()
const cors = require('cors')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt');
const Sequelize = require('sequelize')

// const Role = require('../models/Roles');

roles.use(cors())

process.env.SECRET_KEY = 'secret'

roles.post('/register',(req, res, next) => {
    const today = new Date()
    
    const role =new Role ({
      
      name: req.body.name,
     client_id: req.body. client_id,
      
      created_at: today,
      updated_at: today,
      created_by: req.body.id,
      updated_by: req.body.id
    });
    

    role
   
    .save()
    
    .then(result =>{
      console.log(result);
      res.status(201).json({
        message: "client created"
      });
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({
        error:err
      })
    })
  }
  
)    
roles.get('/',(req, res, next) => {
  Role.findAll()
  .then(doc =>{
  res.status(200).json(doc);  
})
.catch(err=>{
  console.log(err);
  res.status(500).json({
      error: err
  });

});
      
  
});
roles.get('/:rolesId',(req,res,next)=>{
  Role.findAll({
    where: {
      id: req.params.rolesId
     }
  })
  .then(result =>{
  res.send(result)
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json({
        error: err
    });
  })
 
});

roles.delete('/:rolesId',(req,res,next)=>{
  Role.destroy({
    where: {
      id: req.params.rolesId
    }
})
.then(result =>{
  res.sendStatus(200)
})
  .catch(err=>{
    console.log(err);
    res.status(500).json({
        error: err
    });
  })
})


roles.put('/:rolesId', function (req, res, next) {
 let today = new Date()
  const todo_id = req.params.rolesId;

  const { name } = req.body;

  Role.update({
          name: name,
          updated_at:today,
          updated_by:name
      }, {
          where: {
              id: todo_id
          }
      })
      .then(roles => res.json({
          error: false,
          message: 'todo has been updated.'
      }))
      .catch(error => res.json({
          error: true,
          error: error
      }));
});




module.exports = roles