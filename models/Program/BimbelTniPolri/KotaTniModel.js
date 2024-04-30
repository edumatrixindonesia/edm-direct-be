import {Sequelize} from "sequelize";
import db from "../../../config/Database.js";

const {DataTypes} = Sequelize;

const Kotatni = db.define('kotatni',{
    kotatni: DataTypes.STRING,
    slug: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Kotatni;

(async()=>{
    await db.sync();
})();