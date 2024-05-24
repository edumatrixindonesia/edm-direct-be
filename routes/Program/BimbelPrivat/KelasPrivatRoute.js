import express from "express";
import {
  getKelasPrivat,
  getKelasPrivatById,
  updateKelasPrivat,
  saveKelasPrivat,
  deleteKelasPrivat,
} from "../../../controllers/Program/BimbelPrivat/KelasPrivatController.js";

const router = express.Router();

router.get("/kelasprivat", getKelasPrivat);
router.get("/kelasprivat/:id", getKelasPrivatById);
router.post("/kelasprivat", saveKelasPrivat);
router.patch("/kelasprivat/:id", updateKelasPrivat);
router.delete("/kelasprivat/:id", deleteKelasPrivat);

export default router;
