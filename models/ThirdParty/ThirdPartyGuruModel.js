import {Sequelize} from "sequelize";
import db from "../../config/Database.js";

const {DataTypes} = Sequelize;

const GuruThirdParty = db.define('guruthirdparty',{
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
},{
    freezeTableName:true
});

export default GuruThirdParty;

(async()=>{
    await db.sync();
})();