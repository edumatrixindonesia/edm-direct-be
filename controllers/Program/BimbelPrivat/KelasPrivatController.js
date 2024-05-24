import KelasPrivat from "../../../models/Program/BimbelPrivat/KelasPrivatModel.js";
import path from "path";
import fs from "fs";
// import Id from "../models/KotaModel.js"

export const getKelasPrivat = async (req, res) => {
  try {
    const response = await KelasPrivat.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

//buat getKelasPrivat byname
export const getKelasPrivatById = async (req, res) => {
  try {
    const response = await KelasPrivat.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const saveKelasPrivat = (req, res) => {
  //tambahan karena relasi dengan id KelasPrivat
  // let payload = req.body;

  // if (payload.id && payload.id.length > 0) {
  //   let id = Id.find({ name: { $in: payload.id } });
  //   if (id.length) {
  //     payload = { ...payload, id: id.map((KelasPrivat) => KelasPrivat._id) };
  //   } else {
  //     delete payload.id;
  //   }
  // }

//   if (req.files === null)
//     return res.status(400).json({ msg: "No File Uploaded" });
  const kelasPrivat = req.body.kelasPrivat;
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
        KelasPrivat.create({
        kelasPrivat: kelasPrivat,
        slug: slug,
        // image: fileName,
        // url: url,
      });
      res.status(201).json({ msg: "KelasPrivat Created Successfuly" });
    } catch (error) {
      console.log(error.message);
    }
//   });
};

export const updateKelasPrivat = async (req, res) => {
  const kelasPrivat = await KelasPrivat.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!kelasPrivat) return res.status(404).json({ msg: "No Data Found" });

  let fileName = "";
  if (req.files === null) {
    fileName = kelasPrivat.image;
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

    const filepath = `./public/images/${kelasPrivat.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const name = req.body.kelasPrivat;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  try {
    await KelasPrivat.update(
      { name: name, image: fileName, url: url },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "KelasPrivat Updated Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteKelasPrivat = async (req, res) => {
  const kelasPrivat = await KelasPrivat.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!kelasPrivat) return res.status(404).json({ msg: "No Data Found" });

  try {
    const filepath = `./public/images/${kelasPrivat.image}`;
    fs.unlinkSync(filepath);
    await KelasPrivat.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "KelasPrivat Deleted Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};
