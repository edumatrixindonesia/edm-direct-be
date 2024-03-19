import {Sequelize} from "sequelize";
import db from "../../config/Database.js";

const {DataTypes} = Sequelize;

const bestProgram = db.define('bestprogram',{
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName:true
});

export default bestProgram;

(async()=>{
    await db.sync();
})();