const express = require('express')
const clients = express.Router()
const cors = require('cors')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt');
const Sequelize = require('sequelize')

const Client = require('../models/Client');

clients.use(cors())

process.env.SECRET_KEY = 'secret'

clients.post('/register',(req, res, next) => {
    const today = new Date()
    const client =new Client ({
      
      name: req.body.name,
      description: req.body.description,
      email: req.body.email,
      address: req.body.address,
      created_at: today,
      created_at: today,
      created_by: req.body.name,
      created_by: req.body.name
    });

    client
    
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
        
clients.get('/',(req, res, next) => {
  Client.findAll() //find all data
 
  
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
clients.get('/:clientId',(req,res,next)=>{
  Client.findAll({
    where: {
      id: req.params.clientId
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

clients.delete('/:clientId',(req,res,next)=>{
  Client.destroy({
    where: {
      id: req.params.clientId
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
})


clients.put('/:clientId', function (req, res, next) {
 
  const todo_id = req.params.clientId;

  const { name, description,email,address } = req.body;

  Client.update({
          name: name,
          description: description,
          email:email,
          address: address
      }, {
          where: {
              id: todo_id
          }
      })
      .then(clients => res.json({
          error: false,
          message: 'todo has been updated.'
      }))
      .catch(error => res.json({
          error: true,
          error: error
      }));
});




module.exports = clients
