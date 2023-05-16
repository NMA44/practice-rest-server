const {
  createUser,
  getUserById,
  searchByName,
  getAllUsers,
} = require("../controllers/usersControllers");

const usersHandlers = async (req, res) => {
  const { name } = req.query;
  try {
    const results = name ? await searchByName(name) : await getAllUsers();
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const userHandler = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "bdd" : "api";
  try {
    const user = await getUserById(id, source);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createUserHandler = async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const newUser = await createUser(name, email, phone);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { usersHandlers, userHandler, createUserHandler };
