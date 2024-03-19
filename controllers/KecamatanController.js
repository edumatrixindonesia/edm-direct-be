import Kecamatan from "../models/KecamatanModel.js";
import Kab from "../models/IbuKotaKabModel.js";
import path from "path";
import fs from "fs";

export const getKecamatan = async (req, res) => {
  try {
    const kab = await Kab.findOne({
      where: {
        id: req.params.id,
      },
    });
    const response = await Kecamatan.findAll({
      where: {
        kabupaten_id: kab.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getKecamatanById = async (req, res) => {
  try {
    const response = await Kecamatan.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const saveKecamatan = async (req, res) => {
  const kab = await Kab.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!kab) return res.status(404).json({ msg: "No Data Found" });
  //   if (req.files === null)
  //     return res.status(400).json({ msg: "No File Uploaded" });

  const kecamatan = req.body.kecamatan;
  const slug = req.body.slug;
  const kabupaten_id = kab.id;
  //   const file = req.files.file;
  //   const fileSize = file.data.length;
  //   const ext = path.extname(file.name);
  //   const fileName = file.md5 + ext;
  //   const url = ${req.protocol}://${req.get("host")}/images/${fileName};
  //   const allowedType = [".png", ".jpg", ".jpeg"];

  //   if (!allowedType.includes(ext.toLowerCase()))
  //     return res.status(422).json({ msg: "Invalid Images" });
  //   if (fileSize > 5000000)
  //     return res.status(422).json({ msg: "Image must be less than 5 MB" });

  //   file.mv(./public/images/${fileName}, async (err) => {
  //     if (err) return res.status(500).json({ msg: err.message });
  try {
    await Kecamatan.create({
      kecamatan: kecamatan,
      slug: slug,
      // image: fileName,
      // url: url,
      kabupaten_id: kabupaten_id,
    });
    res.status(201).json({ msg: "Kecamatan Created Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
  //   });
};

export const updateKecamatan = async (req, res) => {
  const kec = await Kecamatan.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!kec) return res.status(404).json({ msg: "No Data Found" });

  //   let fileName = "";
  //   if (req.files == null) {
  //     fileName = Kecamatan.image;
  //     url = Kecamatan.url;
  //   } else {
  //     const file = req.files.file;
  //     const fileSize = file.data.length;
  //     const ext = path.extname(file.name);
  //     fileName = file.md5 + ext;
  //     const allowedType = [".png", ".jpg", ".jpeg"];
  //     const url = ${req.protocol}://${req.get("host")}/images/${fileName};

  //     if (!allowedType.includes(ext.toLowerCase()))
  //       return res.status(422).json({ msg: "Invalid Images" });
  //     if (fileSize > 5000000)
  //       return res.status(422).json({ msg: "Image must be less than 5 MB" });

  //     const filepath = ./public/images/${Kecamatan.image};
  //     fs.unlinkSync(filepath);

  //     file.mv(./public/images/${fileName}, (err) => {
  //       if (err) return res.status(500).json({ msg: err.message });
  //     });
  //   }

  try {
    await Kecamatan.update(
      {
        kecamatan: req.body.kecamatan,
        slug: req.body.slug,
        // image: fileName,
        // url: url,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Kecamatan Updated Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteKecamatan = async (req, res) => {
  const kec = await Kecamatan.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!kec) return res.status(404).json({ msg: "No Data Found" });

  try {
    // const filepath = ./public/images/${Kecamatan.image};
    // fs.unlinkSync(filepath);
    await Kecamatan.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Kecamatan Deleted Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};