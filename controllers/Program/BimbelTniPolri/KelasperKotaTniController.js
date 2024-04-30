import KelasperKotatni from "../../../models/Program/BimbelTniPolri/KelasperKotaTniModel.js";
import Kota from "../../../models/Program/BimbelTniPolri/KotaTniModel.js";
import Kelas from "../../../models/Program/BimbelTniPolri/KelasTniModel.js";
import path from "path";
import fs from "fs";
import db from "../../../config/Database.js";

export const getKelasperKotatni = async (req, res) => {
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

export const getKelasperKotatniById = async (req, res) => {
  try {
    const response = await KelasperKotatni.findOne({
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
export const saveKelasperKotatni = async (req, res) => {
  const kelas = await Kelas.findOne({
    where: {
      id: req.params.id,
    },
  });
  const kelastni_id = kelas.id;
  const kotatni_id = req.body.kotatni_id;
  try {
    await KelasperKotatni.create({
      kelastni_id: kelastni_id,
      kotatni_id: kotatni_id,
    });
    res.status(201).json({ msg: "KelasperKotatni Created Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateKelasperKotatni = async (req, res) => {
  const kelasperkotatni = await KelasperKotatni.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!kelasperkotatni) return res.status(404).json({ msg: "No Data Found" });

  let fileName = "";
  if (req.files === null) {
    fileName = kelasperkotatni.image;
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

    const filepath = `./public/images/${kelasperkotatni.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const name = req.body.title;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  try {
    await KelasperKotatni.update(
      { name: name, image: fileName, url: url },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "KelasperKotatni Updated Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteKelasperKotatni = async (req, res) => {
  const kelasperkotatni = await KelasperKotatni.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!kelasperkotatni) return res.status(404).json({ msg: "No Data Found" });

  try {
    const filepath = `./public/images/${kelasperkotatni.image}`;
    fs.unlinkSync(filepath);
    await KelasperKotatni.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "KelasperKotatni Deleted Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};
