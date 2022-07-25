const Sequelize = require('sequelize');
const db = require("./db");

const filme = db.define('filmes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true

    },
    genero:{
        type: Sequelize.STRING,
        allowNull: false,
    }

});

//filme.sync();

module.exports = filme;