import Testimoni from "../models/TestimoniModel.js";
import path from "path";
import fs from "fs";

export const getTestimoni = async (req, res) => {
  try {
    const response = await Testimoni.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getTestimoniById = async (req, res) => {
  try {
    const response = await Testimoni.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const saveTestimoni = (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });
  const name_siswa = req.body.title;
  const judul_testi = req.body.judul_testi
  const deskripsi = req.body.deskripsi;
  const file = req.files?.file;
  const fileSize = file?.data?.length;
  const ext = path?.extname(file?.name);
  const fileName = file?.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Testimoni.create({
        name_siswa: name_siswa,
        judul_testi: judul_testi,
        deskripsi: deskripsi,
        image: fileName,
        url: url,
      });
      res.status(201).json({ msg: "Testimoni Created Successfuly" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updateTestimoni = async (req, res) => {
  const testimoni = await Testimoni.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!testimoni) return res.status(404).json({ msg: "No Data Found" });

  let fileName = "";
  if (req.files === null) {
    fileName = testimoni.image;
  } else {
    const file = req.files?.file;
    const fileSize = file?.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
      return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 5000000)
      return res.status(422).json({ msg: "Image must be less than 5 MB" });

    const filepath = `./public/images/${testimoni.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const name = req.body.title;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  try {
    await Testimoni.update(
      { name: name, image: fileName, url: url },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Testimoni Updated Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTestimoni = async (req, res) => {
  const testimoni = await Testimoni.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!testimoni) return res.status(404).json({ msg: "No Data Found" });

  try {
    const filepath = `./public/images/${testimoni.image}`;
    fs.unlinkSync(filepath);
    await Testimoni.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Testimoni Deleted Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};
