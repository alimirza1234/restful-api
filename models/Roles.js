const Sequelize = require('sequelize')
const db = require('../database/db.js')


module.exports = (sequelize, DataTypes) => {
const Roles= sequelize.define(
    'Role',
    
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
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
        type: Sequelize.STRING,
      },
      updated_by: {
        type: Sequelize.STRING,
      }
    },
    {
      timestamps: false
    }
  )
  return Roles;
}