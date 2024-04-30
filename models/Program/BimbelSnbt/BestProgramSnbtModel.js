import {Sequelize} from "sequelize";
import db from "../../../config/Database.js";

const {DataTypes} = Sequelize;

const bestProgramSnbt = db.define('bestprogramSnbt',{
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName:true
});

export default bestProgramSnbt;

(async()=>{
    await db.sync();
})();