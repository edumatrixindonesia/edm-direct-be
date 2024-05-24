import Kotasnbt from "../../../models/Program/BimbelSnbt/KotaSnbtModel.js";
import path from "path";
import fs from "fs";
// import Id from "../models/KotaModel.js"

export const getKotasnbt = async (req, res) => {
  try {
    const response = await Kotasnbt.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

//buat getkotasnbt byname
export const getKotasnbtById = async (req, res) => {
  try {
    const response = await Kotasnbt.findOne({
      where: {
        slug: req.params.slug,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const saveKotasnbt = (req, res) => {
  //tambahan karena relasi dengan id kotasnbt
  // let payload = req.body;

  // if (payload.id && payload.id.length > 0) {
  //   let id = Id.find({ name: { $in: payload.id } });
  //   if (id.length) {
  //     payload = { ...payload, id: id.map((kotasnbt) => kotasnbt._id) };
  //   } else {
  //     delete payload.id;
  //   }
  // }

//   if (req.files === null)
//     return res.status(400).json({ msg: "No File Uploaded" });
  const kotasnbt = req.body.kotasnbt;
  const slug = req.body.slug;
//   const file = req.files.file;
//   const fileSize = file.data.length;
//   const ext = path.extname(file.name);
//   const fileName = file.md5 + ext;
//   const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
//   const allowedType = [".png", ".jpg", ".jpeg"];

//   if (!allowedType.includes(ext.toLowerCase()))
//     return res.status(422).json({ msg: "Invalid Images" });
//   if (fileSize > 5000000)
//     return res.status(422).json({ msg: "Image must be less than 5 MB" });

//   file.mv(`./public/images/${fileName}`, async (err) => {
    // if (err) return res.status(500).json({ msg: err.message });
    try {
       Kotasnbt.create({
        kotasnbt: kotasnbt,
        slug: slug,
        // image: fileName,
        // url: url,
      });
      res.status(201).json({ msg: "Kotasnbt Created Successfuly" });
    } catch (error) {
      console.log(error.message);
    }
//   });
};

export const updateKotasnbt = async (req, res) => {
  const kotasnbt = await Kotasnbt.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!kotasnbt) return res.status(404).json({ msg: "No Data Found" });

  let fileName = "";
  if (req.files === null) {
    fileName = kotasnbt.image;
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

    const filepath = `./public/images/${kotasnbt.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const name = req.body.kotasnbt;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  try {
    await Kotasnbt.update(
      { name: name, image: fileName, url: url },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Kotasnbt Updated Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteKotasnbt = async (req, res) => {
  const kotasnbt = await Kotasnbt.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!kotasnbt) return res.status(404).json({ msg: "No Data Found" });

  try {
    const filepath = `./public/images/${kotasnbt.image}`;
    fs.unlinkSync(filepath);
    await Kotasnbt.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Kotasnbt Deleted Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};
