import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const PilihanProgram = db.define('pilihanprogram',{
    program_unggulan: DataTypes.STRING,
    link: DataTypes.STRING
},{
    freezeTableName:true
});

export default PilihanProgram;

(async()=>{
    await db.sync();
})();