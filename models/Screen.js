const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
    'Screen',
    
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      client_id: {
        type: Sequelize.STRING
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
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updated_by: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    },
    {
      timestamps: false
    }
  )