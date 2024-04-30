import {Sequelize} from "sequelize";
import db from "../../../config/Database.js";

const {DataTypes} = Sequelize;

const Faqtni = db.define('faqtni',{
    pertanyaan: DataTypes.STRING,
    jawaban: DataTypes.STRING
},{
    freezeTableName:true
});

export default Faqtni;

(async()=>{
    await db.sync();
})();