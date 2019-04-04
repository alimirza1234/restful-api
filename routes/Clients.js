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
    const client = new Client ({
      
      name: req.body.name,
      description: req.body.description,
      email: req.body.email,
      address: req.body.address,
      created_at: today,
      updated_at: today,
      created_by: req.body.id,
      updated_by: req.body.id
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
  Client.findAll({
    where
    
  }) //find all data
 
  
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

// clients.get("asd/relation",(req,res)=>{
//   Client.hasOne(User)  
//   User.hasMany(Role)  
//   Role.belongsTo(User) 
//   // Client.hasMany(User,{ foreignKey: 'client_id' })
//   // Client.belongsTo(User, { as: 'a', constraints: false })


//   user.getUser() // gets you all pictures

//   User.findAll({
//     // where: ...,
//     include: [
//       { model: User }, // load all pictures
//       // { model: Picture, as: 'ProfilePicture' }, // load the profile picture.
//       // Notice that the spelling must be the exact same as the one in the association
//     ]
//   })
// .then(user => res.json({user:user}))

// .catch(error => res.json({
  
//   error: error
// }));

// })
//Relations
// db.roles.belongsTo(db.users);  
// db.users.hasMany(db.roles);  
// db.users.belongsTo(db.clients);  
// db.clients.hasMany(db.users);
// clients.get('/getdata', (req, res) => {  
//   db.users.findAll({
//     include: [
//       {
//         model: db.posts,
//         include: [
//           {
//             model: db.comments
//           }
//         ]
//       }
//     ]
//   }).then(users => {
//     const resObj = users.map(user => {

//       //tidy up the user data
//       return Object.assign(
//         {},
//         {
//           user_id: user.id,
//           username: user.username,
//           role: user.role,
//           posts: user.posts.map(post => {

//             //tidy up the post data
//             return Object.assign(
//               {},
//               {
//                 post_id: post.id,
//                 user_id: post.user_id,
//                 content: post.content,
//                 comments: post.comments.map(comment => {

//                   //tidy up the comment data
//                   return Object.assign(
//                     {},
//                     {
//                       comment_id: comment.id,
//                       post_id: comment.post_id,
//                       commenter: comment.commenter_username,
//                       commenter_email: comment.commenter_email,
//                       content: comment.content
//                     }
//                   )
//                 })
//               }
//               )
//           })
//         }
//       )
//     });
//     res.json(resObj)
//   });
// });



module.exports = clients
