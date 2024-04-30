import SliderHeadersupercamp2 from "../../../models/Program/BimbelSupercamp/SliderHeaderSupercampModel2.js";
import path from "path";
import fs from "fs";

export const getSliderHeaderSupercamp2 = async (req, res) => {
  try {
    const response = await SliderHeadersupercamp2.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getSliderHeaderSupercamp2ById = async (req, res) => {
  try {
    const response = await SliderHeadersupercamp2.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const saveSliderHeaderSupercamp2 = (req, res) => {
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
      await SliderHeadersupercamp2.create({
        name: name,
        slug: slug,
        image: fileName,
        url: url,
      });
      res.status(201).json({ msg: "SliderHeaderSupercamp2 Created Successfuly" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updateSliderHeaderSupercamp2 = async (req, res) => {
  const sliderHeaderSupercamp2 = await SliderHeadersupercamp2.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!sliderHeaderSupercamp2) return res.status(404).json({ msg: "No Data Found" });

  let fileName = "";
  if (req.files === null) {
    fileName = sliderHeaderSupercamp2.image;
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

    const filepath = `./public/images/${sliderHeaderSupercamp2.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const name = req.body.title;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  try {
    await SliderHeadersupercamp2.update(
      { name: name, image: fileName, url: url },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "SliderHeaderSupercamp2 Updated Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteSliderHeaderSupercamp2 = async (req, res) => {
  const sliderHeaderSupercamp2 = await SliderHeadersupercamp2.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!sliderHeaderSupercamp2) return res.status(404).json({ msg: "No Data Found" });

  try {
    const filepath = `./public/images/${sliderHeaderSupercamp2.image}`;
    fs.unlinkSync(filepath);
    await SliderHeadersupercamp2.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "SliderHeaderSupercamp2 Deleted Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};
