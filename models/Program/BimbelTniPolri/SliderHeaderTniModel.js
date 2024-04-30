import {Sequelize} from "sequelize";
import db from "../../../config/Database.js";

const {DataTypes} = Sequelize;

const SliderHeaderTni = db.define('sliderheaderTni',{
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName:true
});

export default SliderHeaderTni;

(async()=>{
    await db.sync();
})();