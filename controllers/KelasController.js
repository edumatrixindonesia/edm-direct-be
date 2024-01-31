import Kelas from "../models/KelasModel.js";
import path from "path";
import fs from "fs";

export const getKelas = async (req, res) => {
  try {
    const response = await Kelas.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getKelasById = async (req, res) => {
  try {
    const response = await Kelas.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const saveKelas = (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });
  const name = req.body?.title;
  const slug = req.body?.slug;
  const file = req.files?.file;
  const fileSize = file?.data?.length;
  const ext = path.extname(file?.name);
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
      await Kelas.create({
        name: name,
        slug: slug,
        image: fileName,
        url: url,
      });
      res.status(201).json({ msg: "Kelas Created Successfuly" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updateKelas = async (req, res) => {
  const kelas = await Kelas.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!kelas) return res.status(404).json({ msg: "No Data Found" });

  let fileName = "";
  if (req.files === null) {
    fileName = kelas.image;
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

    const filepath = `./public/images/${kelas.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const name = req.body.title;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  try {
    await Kelas.update(
      { name: name, image: fileName, url: url },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Kelas Updated Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteKelas = async (req, res) => {
  const kelas = await Kelas.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!kelas) return res.status(404).json({ msg: "No Data Found" });

  try {
    const filepath = `./public/images/${kelas.image}`;
    fs.unlinkSync(filepath);
    await Kelas.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Kelas Deleted Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};
