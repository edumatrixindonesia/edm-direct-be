import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const IbuKotaKecamatan = db.define('ibukotakecamatan',{
    ibukota: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    slug: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName:true
});

export default IbuKotaKecamatan;

(async()=>{
    await db.sync();
})();