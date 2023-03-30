import { Sequelize } from "sequelize";

const db = new Sequelize("news", "news", "imaniman", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
