import Mapel from "../models/MapelModel.js";

export const getMapel = async (req, res) => {
  try {
    const response = await Mapel.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getMapelById = async (req, res) => {
  try {
    const response = await Mapel.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createMapel = async (req, res) => {
  try {
    await Mapel.create(req.body);
    res.status(201).json({ msg: "Mapel Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateMapel = async (req, res) => {
  try {
    await Mapel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Mapel Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteMapel = async (req, res) => {
  try {
    await Mapel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Mapel Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
