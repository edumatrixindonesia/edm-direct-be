import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Testimoni = db.define('testimoni',{
    name_siswa: DataTypes.STRING,
    judul_testi: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Testimoni;

(async()=>{
    await db.sync();
})();