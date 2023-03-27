import { Sequelize } from "sequelize";

const db = new Sequelize("news", "user", "pass", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
