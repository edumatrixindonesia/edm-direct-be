import {Sequelize} from "sequelize";
import db from "../../config/Database.js";
import Tags from "../Tags/TagsKedinasanModel.js"

const {DataTypes} = Sequelize;

const PilihanKelasCpns = db.define('pilihankelascpns',{
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


export default PilihanKelasCpns;

(async()=>{
    await db.sync();
})();