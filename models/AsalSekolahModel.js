import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Sekolah = db.define('asalsekolah',{
    // sekolah: DataTypes.STRING,
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName:true
});

export default Sekolah;

(async()=>{
    await db.sync();
})();