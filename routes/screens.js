const express = require('express')
const screens = express.Router()
const cors = require('cors')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt');
const Sequelize = require('sequelize')

const  Screen = require('../models/Screen');

screens.use(cors())

process.env.SECRET_KEY = 'secret'

screens.post('/register',(req, res, next) => {
    const today = new Date()
    const screen =new Screen ({
      
      name: req.body.name,
      url: req.body.url,
      created_at: today,
      created_at: today,
      created_by: req.body.name,
      created_by: req.body.name
    });

    screen
    
    .save()
    .then(result =>{
      console.log(result);
      res.status(201).json({
        message: "screen created"
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

screens.put('/:screenId', function (req, res, next) {
 
    const todo_id = req.params.screenId;
  
    const { name, url } = req.body;
  
    Screen.update({
            name: name,
            url: url,
            
        }, {
            where: {
                id: todo_id
            }
        })
        .then(screens => res.json({
            error: false,
            message: 'scren has been updated.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
  });
  screens.delete('/:screenId',(req,res,next)=>{
    Screen.destroy({
      where: {
        id: req.params.screenId
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
  
  



module.exports = screens