import {Sequelize} from "sequelize";
import db from "../../../config/Database.js";

const {DataTypes} = Sequelize;

const bestProgramSnbt2 = db.define('bestprogramSnbt_2',{
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName:true
});

export default bestProgramSnbt2;

(async()=>{
    await db.sync();
})();