import {Sequelize} from "sequelize";
import db from "../../../config/Database.js";

const {DataTypes} = Sequelize;

const Kelassnbt = db.define('kelassnbt',{
    kelassnbt: DataTypes.STRING,
    slug: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Kelassnbt;

(async()=>{
    await db.sync();
})();