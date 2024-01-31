import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Layanan = db.define('layanan',{
    judul_layanan: DataTypes.STRING,
    isi_layanan: DataTypes.STRING
},{
    freezeTableName:true
});

export default Layanan;

(async()=>{
    await db.sync();
})();