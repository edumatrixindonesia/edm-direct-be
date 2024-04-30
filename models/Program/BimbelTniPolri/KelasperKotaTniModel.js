import { Sequelize } from "sequelize";
import db from "../../../config/Database.js";

const { DataTypes } = Sequelize;

const KelasperKotatni = db.define(
  "kelasperkotatni",
  {
    kelastni_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "kelastni",
        key: "id",
      },
    },
    kotatni_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "kotatni",
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default KelasperKotatni;

(async () => {
  await db.sync();
})();