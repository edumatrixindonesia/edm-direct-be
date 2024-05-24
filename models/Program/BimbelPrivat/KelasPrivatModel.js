import {Sequelize} from "sequelize";
import db from "../../../config/Database.js";

const {DataTypes} = Sequelize;

const Kelasprivat = db.define('kelasprivat',{
    kelasPrivat: DataTypes.STRING,
    slug: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Kelasprivat;

(async()=>{
    await db.sync();
})();