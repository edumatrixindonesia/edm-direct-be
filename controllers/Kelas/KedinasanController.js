import Kedinasan from "../../models/Kelas/KedinasanModel.js";
import path from "path";
import fs from "fs";

export const getKedinasan = async (req, res) => {
  try {
    const response = await Kedinasan.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getKedinasanById = async (req, res) => {
  try {
    const response = await Kedinasan.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const saveKedinasan = (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });
  const name = req.body?.title;
  const deskripsi = req.body?.deskripsi;
  const tags = req.body.tags;
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
      await Kedinasan.create({
        name: name,
        deskripsi: deskripsi,
        image: fileName,
        tags: tags,
        url: url,
      });
      res.status(201).json({ msg: "Kedinasan Created Successfuly" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updateKedinasan = async (req, res) => {
  const kedinasan = await Kedinasan.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!kedinasan) return res.status(404).json({ msg: "No Data Found" });

  let fileName = "";
  if (req.files === null) {
    fileName = kedinasan.image;
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

    const filepath = `./public/images/${kedinasan.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const name = req.body.title;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  try {
    await Kedinasan.update(
      { name: name, image: fileName, url: url },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Kedinasan Updated Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteKedinasan = async (req, res) => {
  const kedinasan = await Kedinasan.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!kedinasan) return res.status(404).json({ msg: "No Data Found" });

  try {
    const filepath = `./public/images/${kedinasan.image}`;
    fs.unlinkSync(filepath);
    await Kedinasan.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Kedinasan Deleted Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};
