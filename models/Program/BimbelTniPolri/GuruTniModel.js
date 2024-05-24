import { Sequelize } from "sequelize";
import db from "../../../config/Database.js"
import imageGurutni from "../../../models/ThirdParty/ThirdPartyGuruModel.js";

const {DataTypes} = Sequelize

const Gurutni = db.define('gurutni', {
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

imageGurutni.hasMany(Gurutni)
Gurutni.belongsTo(imageGurutni, {foreignKey: 'imageId'})

export default Gurutni;