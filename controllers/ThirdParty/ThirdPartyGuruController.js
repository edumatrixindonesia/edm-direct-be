import ThirdPartyGuru from "../../models/ThirdParty/ThirdPartyGuruModel.js";
import path from "path";
import fs from "fs";

export const getThirdPartyGuru = async (req, res) => {
  try {
    const response = await ThirdPartyGuru.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getThirdPartyGuruById = async (req, res) => {
  try {
    const response = await ThirdPartyGuru.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const saveThirdPartyGuru = (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });
  const file = req.files?.file;
  const fileSize = file?.data?.length;
  const ext = path.extname(file?.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/bgmt/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });

  file.mv(`./public/bgmt/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await ThirdPartyGuru.create({
        image: fileName,
        url: url,
      });
      res.status(201).json({ msg: "ThirdPartyGuru Created Successfuly" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updateThirdPartyGuru = async (req, res) => {
  const thirdpartyguru = await ThirdPartyGuru.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!thirdpartyguru) return res.status(404).json({ msg: "No Data Found" });

  let fileName = "";
  if (req.files === null) {
    fileName = thirdpartyguru.image;
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

    const filepath = `./public/bgmt/${thirdpartyguru.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/bgmt/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const name = req.body.title;
  const url = `${req.protocol}://${req.get("host")}/bgmt/${fileName}`;

  try {
    await ThirdPartyGuru.update(
      { name: name, image: fileName, url: url },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "ThirdPartyGuru Updated Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteThirdPartyGuru = async (req, res) => {
  const thirdpartyguru = await ThirdPartyGuru.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!thirdpartyguru) return res.status(404).json({ msg: "No Data Found" });

  try {
    const filepath = `./public/bgmt/${thirdpartyguru.image}`;
    fs.unlinkSync(filepath);
    await ThirdPartyGuru.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "ThirdPartyGuru Deleted Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};
