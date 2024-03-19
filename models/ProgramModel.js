import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Program = db.define('program',{
    judul_program: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName:true
});

export default Program;

(async()=>{
    await db.sync();
})();