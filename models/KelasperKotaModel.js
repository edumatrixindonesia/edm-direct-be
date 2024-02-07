import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const KelasperKota = db.define('kelasperkota',{
    jenjang_pendidikan: DataTypes.STRING,
    jangkauan_kota: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName:true
});

export default KelasperKota;

(async()=>{
    await db.sync();
})();