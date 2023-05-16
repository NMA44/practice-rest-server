const { Router } = require("express");
const {
  usersHandlers,
  userHandler,
  createUserHandler,
} = require("../handlers/usersHandlers");

const usersRouter = Router();

usersRouter.get("/", usersHandlers);

usersRouter.get("/:id", userHandler);

usersRouter.post("/", createUserHandler);

module.exports = usersRouter;
