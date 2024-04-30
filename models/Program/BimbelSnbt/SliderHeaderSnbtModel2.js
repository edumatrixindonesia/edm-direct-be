import {Sequelize} from "sequelize";
import db from "../../../config/Database.js";

const {DataTypes} = Sequelize;

const SliderHeaderSnbt2 = db.define('sliderheadersnbt_2',{
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName:true
});

export default SliderHeaderSnbt2;

(async()=>{
    await db.sync();
})();