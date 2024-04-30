import express from "express";
import {
  getKelastni,
  getKelastniById,
  updateKelastni,
  saveKelastni,
  deleteKelastni,
} from "../../../controllers/Program/BimbelTniPolri/KelasTniController.js";

const router = express.Router();

router.get("/kelastni", getKelastni);
router.get("/kelastni/:id", getKelastniById);
router.post("/kelastni", saveKelastni);
router.patch("/kelastni/:id", updateKelastni);
router.delete("/kelastni/:id", deleteKelastni);

export default router;
