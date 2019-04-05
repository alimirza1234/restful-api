const Sequelize = require('sequelize')
const db = require('../database/db.js')

// module.exports = db.sequelize.define(
//     'Client',
    
//     {
//       id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//       },
//       name: {
//         type: Sequelize.STRING
//       },
//       description: {
//         type: Sequelize.STRING
//       },
//       email: {
//         type: Sequelize.STRING
//       },
//       address: {
//         type: Sequelize.STRING
//       },
//       created_at: {
//         type: Sequelize.DATE,
//         defaultValue: Sequelize.NOW
//       },
//       updated_at: {
//         type: Sequelize.DATE,
//         defaultValue: Sequelize.NOW
//       },
//       created_by: {
//         type: Sequelize.DATE,
        
//       },
//       updated_by: {
//         type: Sequelize.DATE,
//         defaultValue: Sequelize.NOW
//       }
//     },
//     {
//       timestamps: false
//     }
//   )

module.exports = db.sequelize.define(
    'client',
    
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      address: {
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
        type: Sequelize.INTEGER,
      },
      updated_by: {
        type: Sequelize.INTEGER,
      }
    },
    
    {
      timestamps: false
    }
  )

  
