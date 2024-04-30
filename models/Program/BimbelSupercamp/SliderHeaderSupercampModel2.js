import {Sequelize} from "sequelize";
import db from "../../../config/Database.js";

const {DataTypes} = Sequelize;

const SliderHeadersupercamp2 = db.define('sliderheadersupercamp2',{
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName:true
});

export default SliderHeadersupercamp2;

(async()=>{
    await db.sync();
})();