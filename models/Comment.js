// const { Model, DataTypes } = require("sequelize");

// // Local Modules
// const sequelize = require("../config/connection");

// class Comment extends Model {}

// Comment.init(
//     {
//       id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       message: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//     },
//     {
//       sequelize,
//       timestamps: true,
//       freezeTableName: true,
//       underscored: true,
//       modelName: "post",
//     }
//   );

//   module.exports = Comment;