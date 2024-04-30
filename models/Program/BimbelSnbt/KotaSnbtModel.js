import {Sequelize} from "sequelize";
import db from "../../../config/Database.js";

const {DataTypes} = Sequelize;

const Kotasnbt = db.define('kotasnbt',{
    kotasnbt: DataTypes.STRING,
    slug: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Kotasnbt;

(async()=>{
    await db.sync();
})();