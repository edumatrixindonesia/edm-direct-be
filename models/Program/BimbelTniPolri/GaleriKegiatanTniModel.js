import {Sequelize} from "sequelize";
import db from "../../../config/Database.js";

const {DataTypes} = Sequelize;

const GaleriKegiatanTni = db.define('galerikegiatantni',{
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName:true
});

export default GaleriKegiatanTni;

(async()=>{
    await db.sync();
})();