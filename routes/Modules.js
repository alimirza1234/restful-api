const express = require('express')
const modules = express.Router()
const cors = require('cors')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt');
const Sequelize = require('sequelize')

const Module = require('../models/Modules');
modules.use(cors())

process.env.SECRET_KEY = 'secret'

modules.post('/register',(req, res, next) => {
  const today = new Date()
    const module = new Module ({
      
      name: req.body.name,
      arabic_name: req.body.arabic_name,
      client_id: req.body.client_id,
      screen_id: req.body.screen_id,
      created_at: today,
      updated_at: today,
      created_by: req.body.id,
      updated_by: req.body.id
    });

    module
   
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

modules.get('/',(req, res, next) => {
  Module.findAll()
   //find all data
 
  
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

modules.get('/:moduleId',(req,res,next)=>{
  Module.findAll({
    where: {
      id: req.params.moduleId
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

modules.delete('/:moduleId',(req,res,next)=>{
  Module.destroy({
    where: {
      id: req.params.moduleId
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

modules.put("/:moduleid",(req,res,next)=>{
  const todo = req.params.moduleid;
  const {name,arabic_name,client_id,screen_id}= req.body;

  Module.update({
    name: name,
    arabic_name: arabic_name,
    client_id: client_id,
    screen_id: screen_id,
  },{
    where :{
      id : todo 
    }
  })


  .then(modules => res.json({
    error: false,
    message: 'todo has been updated.'
}))
.catch(error => res.json({
    error: true,
    error: error
}));
});

 
  
 


module.exports = modules