
const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('app', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})



db.sequelize = sequelize
db.Sequelize = Sequelize

//model table



//Relations
// db.roles.belongsTo(db.users);  
// db.users.hasMany(db.roles);  
// db.users.belongsTo(db.clients);  
// db.clients.hasMany(db.users);

module.exports = db
