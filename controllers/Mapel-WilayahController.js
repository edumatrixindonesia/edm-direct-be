import mapelWilayah from "../models/Mapel-WilayahModel.js";
import Kota from "../models/KotaModel.js";
import Mapel from "../models/MapelModel.js";
import { Op } from "sequelize";
import db from "../config/Database.js";

export const getmapelWilayah = async (req, res) => {
  try {
    const mapel1 = await Mapel.findOne({
      where: {
        slug: req.params.slug,
      },
    });
    const kota = await db.query(
      "SELECT kota.kota as namaKota, kota.slug as slugKota, mapelwilayah.mapel_id as mapelId, mapelwilayah.kota_id, mata_pelajaran.name as namaMapel, mata_pelajaran.slug as slugMapel FROM mapelwilayah JOIN kota ON mapelwilayah.kota_id = kota.id JOIN mata_pelajaran ON mapelwilayah.mapel_id = mata_pelajaran.id WHERE mapelwilayah.mapel_id=" +
      mapel1.id
    );
    res.json(kota[0]);
  } catch (error) {
    console.log(error.message);
  }
};

export const getmapelWilayahById = async (req, res) => {
  try {
    const mapel1 = await Mapel.findOne({
      where: {
        slug: req.params.slug,
      },
    });
    const kota = await db.query(
      "SELECT kota.kota as namaKota, kota.slug as slugKota, mapelwilayah.mapel_id as mapelId, mapelwilayah.kota_id, mata_pelajaran.name as namaMapel, mata_pelajaran.slug as slugMapel FROM mapelwilayah JOIN kota ON mapelwilayah.kota_id = kota.id JOIN mata_pelajaran ON mapelwilayah.mapel_id = mata_pelajaran.id WHERE mapelwilayah.mapel_id=" +
      mapel1.id
    );
    // const response = await mapelWilayah.findOne({
    //   where: {
    //     id: req.params.id,
    //   },
    // });
    res.json(kota);
  } catch (error) {
    console.log(error.message);
  }
};

export const savemapelWilayah = async (req, res) => {
  const mapel = await Mapel.findOne({
    where: {
      id: req.params.id,
    },
  });
  const mapel_id = mapel.id;
  const kota_id = req.body.kota_id;
  try {
    await mapelWilayah.create({
      mapel_id: mapel_id,
      kota_id: kota_id,
    });
    res.status(201).json({ msg: "Mapel-Wilayah Created Successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatemapelWilayah = async (req, res) => {
  try {
    const mapelwilayah = await mapelWilayah.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!mapelwilayah)
      return res.status(404).json({ msg: "Data tidak ditemukan" });
    const { mapel, slug } = req.body;
    if (req.role === "admin") {
      await mapelWilayah.update(
        { mapel, slug },
        {
          where: {
            id: mapelwilayah.id,
          },
        }
      );
    } else {
      if (req.kotaId !== mapelwilayah.kotaId)
        return res.status(403).json({ msg: "Akses terlarang" });
      await mapelWilayah.update(
        { mapel, slug },
        {
          where: {
            [Op.and]: [{ id: mapelwilayah.id }, { kotaId: req.kotaId }],
          },
        }
      );
    }
    res.status(200).json({ msg: "MapelWilayah updated successfuly" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deletemapelWilayah = async (req, res) => {
  try {
    const mapelwilayah = await mapelWilayah.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!mapelwilayah)
      return res.status(404).json({ msg: "Data tidak ditemukan" });
    const { mapel, slug } = req.body;
    if (req.role === "admin") {
      await mapelWilayah.destroy({
        where: {
          id: mapelwilayah.id,
        },
      });
    } else {
      if (req.kotaId !== mapelwilayah.kotaId)
        return res.status(403).json({ msg: "Akses terlarang" });
      await mapelWilayah.destroy({
        where: {
          [Op.and]: [{ id: mapelwilayah.id }, { kotaId: req.kotaId }],
        },
      });
    }
    res.status(200).json({ msg: "MapelWilayah deleted successfuly" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
