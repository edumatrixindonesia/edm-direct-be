import express from "express";
import {
  getKota,
  getKotaById,
  updateKota,
  saveKota,
  deleteKota,
} from "../controllers/KotaController.js";

const router = express.Router();

router.get("/kota", getKota);
router.get("/kota/:id", getKotaById);
router.post("/kota", saveKota);
router.patch("/kota/:id", updateKota);
router.delete("/kota/:id", deleteKota);

export default router;
