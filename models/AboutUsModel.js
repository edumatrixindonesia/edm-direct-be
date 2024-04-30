import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const AboutUs = db.define('aboutus',{
    judul_moto: DataTypes.STRING,
    deskripsi_moto: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
},{
    freezeTableName:true
});

export default AboutUs;

(async()=>{
    await db.sync();
})();