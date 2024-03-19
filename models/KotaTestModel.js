import { Sequelize } from "sequelize";
import db from "../config/Database.js"
import Kelas from "./KelasModel.js";

const {DataTypes} = Sequelize

const KotaTest = db.define('kotatest', {
    kota: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    // image: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     validate: {
    //         notEmpty: true,
    //     }
    // },
    // url: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     validate: {
    //         notEmpty: true,
    //     }
    // },
    kelasId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }
}, {
    freezeTableName: true
});

Kelas.hasMany(KotaTest)
KotaTest.belongsTo(Kelas, {foreignKey: 'kelasId'})

export default KotaTest;