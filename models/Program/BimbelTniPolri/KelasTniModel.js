import {Sequelize} from "sequelize";
import db from "../../../config/Database.js";

const {DataTypes} = Sequelize;

const Kelastni = db.define('kelastni',{
    kelastni: DataTypes.STRING,
    slug: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Kelastni;

(async()=>{
    await db.sync();
})();