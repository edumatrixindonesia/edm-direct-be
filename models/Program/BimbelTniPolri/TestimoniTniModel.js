import {Sequelize} from "sequelize";
import db from "../../../config/Database.js";

const {DataTypes} = Sequelize;

const Testimonitni = db.define('testimonitni',{
    name_siswa: DataTypes.STRING,
    judul_testi: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Testimonitni;

(async()=>{
    await db.sync();
})();