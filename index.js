const app = require("./src/app");
const { sequelize } = require("./src/db");
require("dotenv").config();
const port = process.env.PORT;
app.listen(port, () => {
  sequelize.sync({ alter: true });
  console.log(`Server is running on port ${port}`);
});
