const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/db');

const Game = db.define('Game', {
    gameID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    gameTitle: {
        type: DataTypes.VARCHAR(100),
        allowNull: false,
    },
    gameType: {
        type: DataTypes.VARCHAR(50),
        allowNull: false,
    },
    gamePlatform: {
        type: DataTypes.VARCHAR(50),
        allowNull: false,
    },
    gameDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

Game.hasMany(Comment, { as: 'Comments', foreignKey: 'gameID' });

module.exports = Game;