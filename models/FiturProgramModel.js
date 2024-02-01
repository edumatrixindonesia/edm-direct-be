import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const FiturProgram = db.define('fiturprogram',{
    jumlah: DataTypes.STRING,
    isi: DataTypes.STRING
},{
    freezeTableName:true
});

export default FiturProgram;

(async()=>{
    await db.sync();
})();