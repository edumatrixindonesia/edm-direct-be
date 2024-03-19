import {Sequelize} from "sequelize";
import db from "../../config/Database.js";
import Tags from "../Tags/TagsKedinasanModel.js"

const {DataTypes} = Sequelize;

const PilihanKelas = db.define('pilihankelas',{
    name: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    image: DataTypes.STRING,
    universitas: DataTypes.STRING,
    url: DataTypes.STRING,
    tags: DataTypes.STRING,
    whatsapp: DataTypes.STRING,
    detail: DataTypes.STRING
},{
    freezeTableName:true
});


export default PilihanKelas;

(async()=>{
    await db.sync();
})();