import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Kecamatan = db.define(
  "kecamatans",
  {
    kecamatan: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
    kabupaten_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "ibukotakabupaten",
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default Kecamatan;

(async () => {
  await db.sync();
})();