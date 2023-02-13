const { Sequelize } = require('sequelize');

const sequelize = new  Sequelize('nodemvc', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

try{
  sequelize.authenticate()
  console.log("Conectamos ao MySQL")
} catch(er) {
  console.log("Não foi possivel conectar: " + er.message)
}

module.exports = sequelize