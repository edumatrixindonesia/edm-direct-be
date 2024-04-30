import AboutUs from "../models/AboutUsModel.js";
import path from "path";
import fs from "fs";

export const getAboutUs = async (req, res) => {
  try {
    const response = await AboutUs.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getAboutUsById = async (req, res) => {
  try {
    const response = await AboutUs.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const saveAboutUs = (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });
  const judul_moto = req.body.title;
  const deskripsi_moto = req.body.deskripsi_moto;
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
      await AboutUs.create({
        judul_moto: judul_moto,
        deskripsi_moto: deskripsi_moto,
        image: fileName,
        url: url,
      });
      res.status(201).json({ msg: "AboutUs Created Successfuly" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updateAboutUs = async (req, res) => {
  const aboutUs = await AboutUs.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!aboutUs) return res.status(404).json({ msg: "No Data Found" });

  let fileName = "";
  if (req.files === null) {
    fileName = aboutUs.image;
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

    const filepath = `./public/images/${aboutUs.image}`;
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

export const deleteAboutUs = async (req, res) => {
  const aboutUs = await AboutUs.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!aboutUs) return res.status(404).json({ msg: "No Data Found" });

  try {
    const filepath = `./public/images/${aboutUs.image}`;
    fs.unlinkSync(filepath);
    await AboutUs.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "AboutUs Deleted Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};
