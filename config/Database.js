import { Sequelize } from "sequelize";

const db = new Sequelize('edm_database', 'root', '', {
    host: "localhost",
    dialect: "mysql"
})

export default db;