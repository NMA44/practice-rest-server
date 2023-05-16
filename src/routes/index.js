const { Router } = require("express");
const usersRoutes = require("./usersRoutes");
const postsRoutes = require("./postsRoutes");

const mainRouter = Router();

mainRouter.use("/users", usersRoutes);
mainRouter.use("/posts", postsRoutes);

module.exports = mainRouter;
