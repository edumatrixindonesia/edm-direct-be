import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const IbuKotaKabupaten = db.define('ibukotakabupaten',{
    // ibukota: DataTypes.STRING,
    kota_kabupaten: DataTypes.STRING,
    slug: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    kota_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "kota",
            key: "id"
        }
    }
},{
    freezeTableName:true
});

export default IbuKotaKabupaten;

(async()=>{
    await db.sync();
})();