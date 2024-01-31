import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Office = db.define('office',{
    judul_office: DataTypes.STRING,
    isi_office: DataTypes.STRING
},{
    freezeTableName:true
});

export default Office;

(async()=>{
    await db.sync();
})();