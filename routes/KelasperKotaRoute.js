import express from "express";
import {
  getKelasperKota,
  getKelasperKotaById,
  updateKelasperKota,
  saveKelasperKota,
  deleteKelasperKota,
} from "../controllers/KelasperKotaController.js";

const router = express.Router();

router.get("/kelasperkota/:id", getKelasperKota);
router.get("/kelasperkota/:id", getKelasperKotaById);
router.post("/kelasperkota/:id", saveKelasperKota);
router.patch("/kelasperkota/:id", updateKelasperKota);
router.delete("/kelasperkota/:id", deleteKelasperKota);

export default router;
