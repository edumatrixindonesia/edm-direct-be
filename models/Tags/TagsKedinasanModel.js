import {Sequelize} from "sequelize";
// import db from "../config/Database.js";

import db from "../../config/Database.js"

const {DataTypes} = Sequelize;

const Tags = db.define('tags',{
    tags: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Tags;

(async()=>{
    await db.sync();
})();