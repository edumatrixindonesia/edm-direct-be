import { Sequelize } from "sequelize";
import db from "../config/Database.js"
import imageGuru from "../models/ThirdParty/ThirdPartyGuruModel.js";

const {DataTypes} = Sequelize

const Guru = db.define('guru', {
    name: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    topTitle: DataTypes.STRING,
    universitas: DataTypes.STRING,
    image: DataTypes.STRING,
    image2: DataTypes.STRING, 
    url: DataTypes.STRING,
    url2: DataTypes.STRING,
    tagId: {
      type: DataTypes.INTEGER,
      references: {
        model: "tags",
        key: "id",
      },
    },
}, {
    freezeTableName: true
});

imageGuru.hasMany(Guru)
Guru.belongsTo(imageGuru, {foreignKey: 'imageId'})

export default Guru;