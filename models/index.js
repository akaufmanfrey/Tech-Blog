// import all models here
const User = require("./User");
const Post = require("./Post");
const Comment = require('./Comment')
// Reminder- create any additional associations here
Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Post, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "CASCADE"
});

Post.hasMany(Comment, {
  foreignKey: "post_id"
});
// export all models here
module.exports = { User, Post, Comment };
