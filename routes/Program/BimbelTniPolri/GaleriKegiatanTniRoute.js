import express from "express";
import {
  getGaleriKegiatanTni,
  getGaleriKegiatanTniById,
  updateGaleriKegiatanTni,
  saveGaleriKegiatanTni,
  deleteGaleriKegiatanTni,
} from "../../../controllers/Program/BimbelTniPolri/GaleriKegiatanTniController.js";

const router = express.Router();

router.get("/galerikegiatantni", getGaleriKegiatanTni);
router.get("/galerikegiatantni/:id", getGaleriKegiatanTniById);
router.post("/galerikegiatantni", saveGaleriKegiatanTni);
router.patch("/galerikegiatantni/:id", updateGaleriKegiatanTni);
router.delete("/galerikegiatantni/:id", deleteGaleriKegiatanTni);

export default router;
