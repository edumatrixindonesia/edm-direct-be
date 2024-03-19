import express from "express";
import {
  getKecamatan,
  getKecamatanById,
  updateKecamatan,
  saveKecamatan,
  deleteKecamatan,
} from "../controllers/KecamatanController.js";

const router = express.Router();

router.get("/Kecamatan/:id", getKecamatan);
router.get("/Kecamatan/:id", getKecamatanById);
router.post("/Kecamatan/:id", saveKecamatan);
router.patch("/Kecamatan/:id", updateKecamatan);
router.delete("/Kecamatan/:id", deleteKecamatan);

export default router;