const { User } = require("../db");
const axios = require("axios");
const createUser = async (name, email, phone) => {
  const newUser = await User.create({ name, phone, email });
  return newUser;
};
const cleanArray = (apiUsersRaw) =>
  apiUsersRaw.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      created: false,
    };
  });

const getUserById = async (id, source) => {
  const user =
    source === "api"
      ? (await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`))
          .data
      : await User.findByPk(id);
  return user;
};

const searchByName = async (name) => {
  const databaseUsers = await User.findAll({ where: { name: name } });
  const apiUsersRaw = (
    await axios.get("https://jsonplaceholder.typicode.com/users")
  ).data;
  const apiUsers = cleanArray(apiUsersRaw);
  const filteredApi = apiUsers.filter((user) => user.name === name);
  return [...filteredApi, ...databaseUsers];
};
const getAllUsers = async () => {
  const databaseUsers = await User.findAll();
  const apiUsersRaw = (
    await axios.get("https://jsonplaceholder.typicode.com/users")
  ).data;
  const apiUsers = cleanArray(apiUsersRaw);
  const results = [...databaseUsers, ...apiUsers];
  return results;
};
module.exports = { createUser, getUserById, searchByName, getAllUsers };
