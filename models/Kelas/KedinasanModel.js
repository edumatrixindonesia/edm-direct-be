import {Sequelize} from "sequelize";
import db from "../../config/Database.js";

const {DataTypes} = Sequelize;

const Kedinasan = db.define('kedinasan',{
    name: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    tags: DataTypes.STRING
},{
    freezeTableName:true
});

export default Kedinasan;

(async()=>{
    await db.sync();
})();