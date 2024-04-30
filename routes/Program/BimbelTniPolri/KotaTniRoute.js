import express from "express";
import {
  getKotatni,
  getKotatniById,
  updateKotatni,
  saveKotatni,
  deleteKotatni,
 } from "../../../controllers/Program/BimbelTniPolri/KotaTniController.js";

const router = express.Router();

router.get("/kotatni", getKotatni);
router.get("/kotatni/:id", getKotatniById);
router.post("/kotatni", saveKotatni);
router.patch("/kotatni/:id", updateKotatni);
router.delete("/kotatni/:id", deleteKotatni);

export default router;
