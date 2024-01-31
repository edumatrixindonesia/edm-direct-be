import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Whatsapp = db.define('whatsapps',{
    name: DataTypes.STRING,
    nomor: DataTypes.STRING
},{
    freezeTableName:true
});

export default Whatsapp;

(async()=>{
    await db.sync();
})();