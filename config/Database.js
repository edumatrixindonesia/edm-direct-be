import { Sequelize } from "sequelize";

// const db = new Sequelize("u1665540_edm_database_directory", 'u1665540_admin', 'Bismillah2023', {
//   host: "server.edumatrix-indonesia.com",
//   dialect: "mysql",
// });

const db = new Sequelize("edm_database", 'root', '', {
  host: "localhost",
  dialect: "mysql",
});

export default db;
