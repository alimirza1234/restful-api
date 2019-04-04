const express = require('express')
const modules = express.Router()
const cors = require('cors')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt');
const Sequelize = require('sequelize')

const  Module = require('../models/Modules');

modules.use(cors())

process.env.SECRET_KEY = 'secret'

modules.post('/register',(req, res, next) => {
    const today = new Date()
    const module =new Module ({
      
      name: req.body.name,
      arabic_name: req.body.url,
      client_id: req.body.client_id,
      screen_id: req.body.screen_id,
      created_at:today,
      updated_at:today,
      created_by: req.body.name,
      created_by: req.body.name
    });

    module
    console.log(module)
    
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

// screens.put('/:screenId', function (req, res, next) {
 
//     const todo_id = req.params.screenId;
  
//     const { name, url } = req.body;
  
//     Screen.update({
//             name: name,
//             url: url,
            
//         }, {
//             where: {
//                 id: todo_id
//             }
//         })
//         .then(screens => res.json({
//             error: false,
//             message: 'scren has been updated.'
//         }))
//         .catch(error => res.json({
//             error: true,
//             error: error
//         }));
//   });
//   screens.delete('/:screenId',(req,res,next)=>{
//     Screen.destroy({
//       where: {
//         id: req.params.screenId
//       }
//   })
//   .then(result =>{
//     res.send(result)
//     })
//     .catch(err=>{
//       console.log(err);
//       res.status(500).json({
//           error: err
//       });
//     })
//   })
  
  



module.exports = modules