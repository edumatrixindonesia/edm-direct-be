import Kotatni from "../../../models/Program/BimbelTniPolri/KotaTniModel.js";
import path from "path";
import fs from "fs";
// import Id from "../models/KotaModel.js"

export const getKotatni = async (req, res) => {
  try {
    const response = await Kotatni.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

//buat getkotatni byname
export const getKotatniById = async (req, res) => {
  try {
    const response = await Kotatni.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const saveKotatni = (req, res) => {
  //tambahan karena relasi dengan id kotatni
  // let payload = req.body;

  // if (payload.id && payload.id.length > 0) {
  //   let id = Id.find({ name: { $in: payload.id } });
  //   if (id.length) {
  //     payload = { ...payload, id: id.map((kotatni) => kotatni._id) };
  //   } else {
  //     delete payload.id;
  //   }
  // }

//   if (req.files === null)
//     return res.status(400).json({ msg: "No File Uploaded" });
  const kotatni = req.body.kotatni;
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
       Kotatni.create({
        kotatni: kotatni,
        slug: slug,
        // image: fileName,
        // url: url,
      });
      res.status(201).json({ msg: "Kotatni Created Successfuly" });
    } catch (error) {
      console.log(error.message);
    }
//   });
};

export const updateKotatni = async (req, res) => {
  const kotatni = await Kotatni.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!kotatni) return res.status(404).json({ msg: "No Data Found" });

  let fileName = "";
  if (req.files === null) {
    fileName = kotatni.image;
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

    const filepath = `./public/images/${kotatni.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const name = req.body.kotatni;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  try {
    await Kotatni.update(
      { name: name, image: fileName, url: url },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Kotatni Updated Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteKotatni = async (req, res) => {
  const kotatni = await Kotatni.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!kotatni) return res.status(404).json({ msg: "No Data Found" });

  try {
    const filepath = `./public/images/${kotatni.image}`;
    fs.unlinkSync(filepath);
    await Kotatni.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Kotatni Deleted Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};
