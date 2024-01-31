import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Reservasi = db.define('reservasis',{
    name: DataTypes.STRING,
    nomorWA: DataTypes.STRING,
    nomorHP: DataTypes.STRING
},{
    freezeTableName:true
});

export default Reservasi;

(async()=>{
    await db.sync();
})();