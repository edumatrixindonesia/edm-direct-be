import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const KelasperKota = db.define(
  "kelasperkota",
  {
    kelas_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "kelas",
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
  },
  {
    freezeTableName: true,
  }
);

export default KelasperKota;

(async () => {
  await db.sync();
})();