const { Sequelize } = require("sequelize");
require("dotenv").config();
const { DB_HOST, DB_PASS, DB_USER } = process.env;
const userModel = require("./models/User");
const postModel = require("./models/Post");
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/demo`,
  { logging: false }
);

userModel(sequelize);
postModel(sequelize);

const { User, Post } = sequelize.models;

User.hasMany(Post);
Post.belongsTo(User);

module.exports = { sequelize, ...sequelize.models };
