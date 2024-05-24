import {Sequelize} from "sequelize";
import db from "../../../config/Database.js";

const {DataTypes} = Sequelize;

const SliderHeaderprivat2 = db.define('sliderheaderprivat2',{
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName:true
});

export default SliderHeaderprivat2;

(async()=>{
    await db.sync();
})();