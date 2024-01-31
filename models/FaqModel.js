import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Faq = db.define('faq',{
    pertanyaan: DataTypes.STRING,
    jawaban: DataTypes.STRING
},{
    freezeTableName:true
});

export default Faq;

(async()=>{
    await db.sync();
})();