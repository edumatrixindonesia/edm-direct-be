import KelasperKota from "../models/KelasperKotaModel.js";
import Kota from "../models/KotaModel.js";
import Kelas from "../models/KelasModel.js"
import path from "path";
import fs from "fs";
import db from "../config/Database.js";

export const getKelasperKota = async (req, res) => {
  try {
    const kota = await db.query(
      "SELECT kota.kota as namaKota, kelasperkota.kelas_id as kelasId, kelasperkota.kota_id FROM kelasperkota JOIN kota ON kelasperkota.kota_id = kota.id JOIN kelas ON kelasperkota.kelas_id = kelas.id WHERE kelasperkota.kelas_id=" +
        req.params.id
    );
    res.json(kota[0]);
  } catch (error) {
    console.log(error.message);
  }
};

export const getKelasperKotaById = async (req, res) => {
  try {
    const response = await KelasperKota.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};


// PERBAIKAN
export const saveKelasperKota = async (req, res) => {
  const kelas = await Kelas.findOne({
    where: {
      id: req.params.id,
    },
  });
  const kelas_id = kelas.id;
  const kota_id = req.body.kota_id;
  try {
    await KelasperKota.create({
      kelas_id: kelas_id,
      kota_id: kota_id,
    });
    res.status(201).json({ msg: "KelasperKota Created Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateKelasperKota = async (req, res) => {
  const kelasperkota = await KelasperKota.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!kelasperkota) return res.status(404).json({ msg: "No Data Found" });

  let fileName = "";
  if (req.files === null) {
    fileName = kelasperkota.image;
  } else {
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
      return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 5000000)
      return res.status(422).json({ msg: "Image must be less than 5 MB" });

    const filepath = `./public/images/${kelasperkota.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const name = req.body.title;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  try {
    await KelasperKota.update(
      { name: name, image: fileName, url: url },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "KelasperKota Updated Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteKelasperKota = async (req, res) => {
  const kelasperkota = await KelasperKota.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!kelasperkota) return res.status(404).json({ msg: "No Data Found" });

  try {
    const filepath = `./public/images/${kelasperkota.image}`;
    fs.unlinkSync(filepath);
    await KelasperKota.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "KelasperKota Deleted Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};
