import PilihanKelasOsn from "../../models/Kelas/PilihanKelasOsnModel.js";
import path from "path";
import fs from "fs";
import Tags from "../../models/Tags/TagsKedinasanModel.js";

export const getPilihanKelasOsn = async (req, res) => {
  try {
    const response = await PilihanKelasOsn.findAll();
    res.json(response);

    //tambahan karena relasi dengan id
    if (response.tags) {
      let tags = await Tags.findOne({
        name: { $regex: response.tags, $options: "i" },
      });
      if (tags) {
        response = { ...response, tags: tags._id };
      } else {
        delete response.tags;
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const getPilihanKelasOsnById = async (req, res) => {
  try {
    const response = await PilihanKelasOsn.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const savePilihanKelasOsn = async (req, res) => {
  try {
    const response = await PilihanKelasOsn.findAll();
    res.json(response);

    //tambahan karena relasi dengan id
    if (response.tags) {
      let tags = await Tags.findOne({
        name: { $regex: response.tags, $options: "i" },
      });
      if (tags) {
        response = { ...response, tags: tags._id };
      } else {
        delete response.tags;
      }
    }
  } catch (error) {
    console.log(error.message);
  }
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });
  const name = req.body?.title;
  const deskripsi = req.body?.deskripsi;
  const universitas = req.body.universitas;
  const tags = req.body.tags;
  const whatsapp = req.body.whatsapp
  const detail = req.body.detail
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
      await PilihanKelasOsn.create({
        name: name,
        deskripsi: deskripsi,
        image: fileName,
        universitas: universitas,
        tags: tags,
        whatsapp: whatsapp,
        detail:detail,
        url: url,
      });
      res.status(201).json({ msg: "PilihanKelasOsn Created Successfuly" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updatePilihanKelasOsn = async (req, res) => {
  const pilihankelasOsn = await PilihanKelasOsn.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!pilihankelasOsn) return res.status(404).json({ msg: "No Data Found" });

  let fileName = "";
  if (req.files === null) {
    fileName = pilihankelasOsn.image;
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

    const filepath = `./public/images/${pilihankelasOsn.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const name = req.body.title;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  try {
    await PilihanKelasOsn.update(
      { name: name, image: fileName, url: url },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "PilihanKelasOsn Updated Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePilihanKelasOsn = async (req, res) => {
  const pilihankelas = await PilihanKelasOsn.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!pilihankelasOsn) return res.status(404).json({ msg: "No Data Found" });

  try {
    const filepath = `./public/images/${pilihankelasOsn.image}`;
    fs.unlinkSync(filepath);
    await PilihanKelasOsn.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "PilihanKelasOsn Deleted Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};
