const { Router } = require("express");

const postsRoutes = Router();

postsRoutes.get("/", (req, res) => {
  res.send("get posts");
});

postsRoutes.post("/", (req, res) => {
  res.send("post posts");
});

module.exports = postsRoutes;
