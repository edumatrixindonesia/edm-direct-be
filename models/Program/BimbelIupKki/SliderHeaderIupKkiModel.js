import {Sequelize} from "sequelize";
import db from "../../../config/Database.js";

const {DataTypes} = Sequelize;

const SliderHeaderiupkki = db.define('sliderheaderiupkki',{
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName:true
});

export default SliderHeaderiupkki;

(async()=>{
    await db.sync();
})();