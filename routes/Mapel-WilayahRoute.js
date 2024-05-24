import express from "express";
import {
  getmapelWilayah,
  getmapelWilayahById,
  updatemapelWilayah,
  savemapelWilayah,
  deletemapelWilayah,
 } from "../controllers/Mapel-WilayahController.js";

const router = express.Router();

router.get("/mapelwilayah/:slug", getmapelWilayah);
router.get("/mapelwilayah/:slug/kota/:slug", getmapelWilayahById);
router.post("/mapelwilayah/:id", savemapelWilayah);
router.patch("/mapelwilayah/:id", updatemapelWilayah);
router.delete("/mapelwilayah/:id", deletemapelWilayah);

export default router;
