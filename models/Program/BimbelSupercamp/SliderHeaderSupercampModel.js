import {Sequelize} from "sequelize";
import db from "../../../config/Database.js";

const {DataTypes} = Sequelize;

const SliderHeadersupercamp = db.define('sliderheadersupercamp',{
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName:true
});

export default SliderHeadersupercamp;

(async()=>{
    await db.sync();
})();