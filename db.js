const Sequelize = require('sequelize');
const sequelize = new Sequelize("locadora", "root", "123456", {
   host: 'localhost',
   dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("Conexão realizada com sucesso!");
}).catch(function(){
    console.log("Erro: conexão não realizada");
});


module.exports = sequelize;