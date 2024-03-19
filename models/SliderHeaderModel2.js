import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const SliderHeader_2 = db.define('sliderheader_2',{
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName:true
});

export default SliderHeader_2;

(async()=>{
    await db.sync();
})();