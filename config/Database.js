import { Sequelize } from "sequelize";


const db = new Sequelize("edm_database", 'root', '', {
  host: "localhost",
  dialect: "mysql",
});

// const db = new Sequelize("edulinki_edm_directory", 'edulinki_directory', 'Bismillah2023', {
//   host: "api.edulink-indonesia.com",
//   dialect: "mysql",
// });

export default db;
