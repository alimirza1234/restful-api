 const Sequelize = require('sequelize')
const db = require('../database/db.js')


module.exports = db.sequelize.define(
    'image',
    {
      id: {
        primaryKey: true,
        type:  Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING
      },
      imageurl: {
        type: Sequelize.STRING 
      },
      width : {
        type: Sequelize.BIGINT 
      },
      height: {
        type: Sequelize.BIGINT
      },
      mimetype: {
        type: Sequelize.STRING
      },
      ext: {
        type: Sequelize.STRING
      },
      client_id: {
        type: Sequelize.INTEGER
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      created_by: {
        type: Sequelize.BLOB,
      },
      updated_by: {
        type: Sequelize.BLOB,
      }
    },
    
    {
      timestamps: false
    }
  )
