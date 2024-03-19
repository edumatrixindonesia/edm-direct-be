import express from "express";
import {
  getmapelWilayah,
  getmapelWilayahById,
  updatemapelWilayah,
  savemapelWilayah,
  deletemapelWilayah,
 } from "../controllers/Mapel-WilayahController.js";

const router = express.Router();

router.get("/mapelwilayah/:id", getmapelWilayah);
router.get("/mapelwilayah/:id", getmapelWilayahById);
router.post("/mapelwilayah/:id", savemapelWilayah);
router.patch("/mapelwilayah/:id", updatemapelWilayah);
router.delete("/mapelwilayah/:id", deletemapelWilayah);

export default router;
