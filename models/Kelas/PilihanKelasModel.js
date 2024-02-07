import {Sequelize} from "sequelize";
import db from "../../config/Database.js";

const {DataTypes} = Sequelize;

const PilihanKelas = db.define('pilihankelas',{
    name: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    tags: DataTypes.STRING
},{
    freezeTableName:true
});

export default PilihanKelas;

(async()=>{
    await db.sync();
})();