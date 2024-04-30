import BestProgramTni from "../../../models/Program/BimbelTniPolri/BestProgramTniModel.js";
import path from "path";
import fs from "fs";

export const getBestProgramTni = async (req, res) => {
  try {
    const response = await BestProgramTni.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getBestProgramTniById = async (req, res) => {
  try {
    const response = await BestProgramTni.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const saveBestProgramTni = (req, res) => {
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
      await BestProgramTni.create({
        name: name,
        slug: slug,
        image: fileName,
        url: url,
      });
      res.status(201).json({ msg: "Best ProgramTni Created Successfuly" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updateBestProgramTni = async (req, res) => {
  const bestProgramTni = await BestProgramTni.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!bestProgramTni) return res.status(404).json({ msg: "No Data Found" });

  let fileName = "";
  if (req.files === null) {
    fileName = bestProgramTni.image;
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
    res.status(200).json({ msg: "Best ProgramTni Updated Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteBestProgramTni = async (req, res) => {
  const bestProgramTni = await BestProgramTni.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!bestProgramTni) return res.status(404).json({ msg: "No Data Found" });

  try {
    const filepath = `./public/images/${bestProgramTni.image}`;
    fs.unlinkSync(filepath);
    await BestProgramTni.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Best ProgramTni Deleted Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};
