import { Sequelize } from "sequelize";
import db from "../config/Database.js"
import Kota from "./KotaModel.js";

const {DataTypes} = Sequelize

const mapelWilayah = db.define('mapelwilayah', {
    mapel_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "mata_pelajaran",
          key: "id",
        },
      },
      kota_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "kota",
          key: "id",
        },
      },
}, {
    freezeTableName: true
});

export default mapelWilayah;