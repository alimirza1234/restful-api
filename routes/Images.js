const express = require('express');
const images = express.Router();
const cors = require('cors');
const Sequelize = require('sequelize');
const Image = require('../models/Images');
const multer = require('multer');

const path = require("path");

// const upload = multer({dest: 'uploads/'});     //where multer upload files



images.use(cors())
process.env.SECRET_KEY = 'secret'

var Storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req, file, cb) {
        cb(null, file.fieldname +  "_" + path.extname(file.originalname));
        
    }
    
    
});


var upload = multer({
    storage: Storage
}).single("myImage");
// if multiple images file array("imgUploader", 3);

images.post("/",(req,res)=>{
   

   
    upload(req,res,(err)=>{
        if(err){
            res.render({msg:err});
            res.send('error uploading');
        }else{
            
            console.log(req.file)
            var sizeOf = require('image-size');
        sizeOf(req.file.path, function (err, dimensions) {
            const today = new Date()
            const image = new Image({
                name: req.file.filename,
                client_id: req.body.client_id,
                imageurl: req.file.path,
                created_at: today,
                created_at: today,
                created_by: today,
                updated_by: today,
                height: dimensions.height,
                width: dimensions.width,
                mimetype: req.file.mimetype,
                ext: req.file.mimetype.split('/')[1] === 'png' ? req.file.mimetype.split('/')[1] : 'jpg'
            });
            image
            .save()
            .then(result => {
                
                    console.log(result);
                    res.status(201).json({
                      message: "client created"
                    });
                  })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                })
            })
    });
    }
})

})   

images.get('/', (req, res ) => {
    Image.findOne
    // ({
    //     where:{
    //         id:req.params.cid
    //     }
    // })
    .then( result  => {
        res.sendFile(result.imageurl)
    })
    .catch( err => {
        console.log(err)
    })
})


module.exports = images