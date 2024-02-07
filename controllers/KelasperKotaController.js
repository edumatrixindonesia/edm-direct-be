import KelasperKota from "../models/KelasperKotaModel.js";
import path from "path";
import fs from "fs";

export const getKelasperKota = async (req, res) => {
  try {
    const response = await KelasperKota.findAll();
    res.json(response);
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

export const saveKelasperKota = (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });
  const jenjang_pendidikan = req.body.title;
  const jangkauan_kota = req.body.jangkauan_kota;
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await KelasperKota.create({
        jenjang_pendidikan: jenjang_pendidikan,
        jangkauan_kota: jangkauan_kota,
        image: fileName,
        url: url,
      });
      res.status(201).json({ msg: "KelasperKota Created Successfuly" });
    } catch (error) {
      console.log(error.message);
    }
  });
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
