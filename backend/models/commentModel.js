const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/db');

const Comments = db.define('Comment', {
    commentID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    gameID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    commentContent: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    note: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    commentDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

module.exports = Comments;