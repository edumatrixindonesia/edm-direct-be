import {Sequelize} from "sequelize";
import db from "../../../config/Database.js";

const {DataTypes} = Sequelize;

const SliderHeaderSnbt = db.define('sliderheadersnbt',{
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName:true
});

export default SliderHeaderSnbt;

(async()=>{
    await db.sync();
})();