import Guru from "../models/GuruModel.js";
import Tags from "../models/Tags/TagsKedinasanModel.js";
import path from "path";
import fs from "fs";

export const getGuru = async (req, res) => {
  try {
    const response = await Guru.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getGuruById = async (req, res) => {
  try {
    const response = await Guru.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// export const saveGuru = async (req, res) => {
//   const img = await Image.findOne({
//     where: {
//       id: req.params.id,
//     },
//   });

//   if (req.files === null)
//     return res.status(400).json({ msg: "No File Uploaded" });
//   const name = req.body.title;
//   const deskripsi = req.body.deskripsi;
//   const universitas = req.body.universitas;
//   const topTitle = req.body.topTitle;
//   const guru_id = img.id;
//   const file = req.files?.file;
//   const fileSize = file?.data?.length;
//   const ext = path?.extname(file?.name);
//   const fileName = file?.md5 + ext;
//   const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
//   const allowedType = [".png", ".jpg", ".jpeg"];

//   if (!allowedType.includes(ext.toLowerCase()))
//     return res.status(422).json({ msg: "Invalid Images" });
//   if (fileSize > 5000000)
//     return res.status(422).json({ msg: "Image must be less than 5 MB" });

//   file.mv(`./public/images/${fileName}`, async (err) => {
//     if (err) return res.status(500).json({ msg: err.message });
//     try {
//       await Guru.create({
//         name: name,
//         deskripsi: deskripsi,
//         universitas: universitas,
//         topTitle: topTitle,
//         image: fileName,
//         url: url,
//         guru_id: guru_id,
//       });
//       res.status(201).json({ msg: "Guru Created Successfuly" });
//     } catch (error) {
//       console.log(error.message);
//     }
//   });
// };

// PERBAIKAN
export const saveGuru = async (req, res) => {
  const tags = await Tags.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });
  const name = req.body.title;
  const deskripsi = req.body.deskripsi;
  const universitas = req.body.universitas;
  const topTitle = req.body.topTitle;
  const tagId = tags.id;
  const file1 = req.files?.file1;
  const fileSize = file1?.data?.length;
  const ext = path?.extname(file1?.name);
  const fileName = file1?.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  const file2 = req.files?.file2;
  const fileSize2 = file2?.data?.length;
  const ext2 = path?.extname(file2?.name);
  const fileName2 = file2?.md5 + ext;
  const url2 = `${req.protocol}://${req.get("host")}/images/${fileName2}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });

  if (!allowedType.includes(ext2.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });
  if (fileSize2 > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });

  file1.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
  });

  file2.mv(`./public/images/${fileName2}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
  });

  try {
    await Guru.create({
      name: name,
      deskripsi: deskripsi,
      universitas: universitas,
      topTitle: topTitle,
      image: fileName,
      url: url,
      image2: fileName2,
      url2: url2,
      tagId: tagId,
    });
    res.status(201).json({ msg: "Guru Created Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateGuru = async (req, res) => {
  const guru = await Guru.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!guru) return res.status(404).json({ msg: "No Data Found" });

  let fileName = "";
  if (req.files === null) {
    fileName = guru.image;
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

    const filepath = `./public/images/${guru.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const name = req.body.title;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  try {
    await Guru.update(
      { name: name, image: fileName, url: url },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Guru Updated Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteGuru = async (req, res) => {
  const guru = await Guru.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!guru) return res.status(404).json({ msg: "No Data Found" });

  try {
    const filepath = `./public/images/${guru.image}`;
    fs.unlinkSync(filepath);
    await Guru.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Guru Deleted Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};