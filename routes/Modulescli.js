const express = require('express')
const module_client = express.Router()
const cors = require('cors')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt');
const Sequelize = require('sequelize')

const Module_client = require('../models/Modulescli');
module_client.use(cors())

process.env.SECRET_KEY = 'secret'

module_client.post('/register',(req, res, next) => {
  const today = new Date()
    const module_client = new Module_client({
      
      
      client_id: req.body.client_id,
      module_id: req.body.module_id,
      user_id: req.body.user_id,
      created_at: today,
      updated_at: today,
      created_by: req.body.id,
      updated_by: req.body.id
    });

    module_client
   
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

module.exports = module_client