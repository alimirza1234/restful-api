const Sequelize = require('sequelize')
const db = require('../database/db.js')


// module.exports = db.sequelize.define(
// "User", {
 
//   name: {
//           type: Sequelize.STRING
//         },
//         username: {
//           type: Sequelize.STRING
//         },
//         email: {
//           type: Sequelize.STRING
//         },
//         password: {
//           type: Sequelize.STRING
//         },
//         created_at: {
//           type: Sequelize.DATE,
//           defaultValue: Sequelize.NOW
//         },
//         updated_at: {
//           type: Sequelize.DATE,
//           defaultValue: Sequelize.NOW
//         },
//         created_by: {
//           type: Sequelize.DATE,
//           defaultValue: Sequelize.NOW
//         },
//         updated_by: {
//           type: Sequelize.DATE,
//           defaultValue: Sequelize.NOW
//         }
//       },

//  {
//   freezeTableName: true
// });

// User.methods.generateHash = function(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// User.methods.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.local.password);
// };
//   return User;


module.exports = db.sequelize.define(
  'User',
  
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
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