import express from "express";
import {
  getBestProgramTni,
  getBestProgramTniById,
  updateBestProgramTni,
  saveBestProgramTni,
  deleteBestProgramTni,
 } from "../../../controllers/Program/BimbelTniPolri/BestProgramTniController.js";

const router = express.Router();

router.get("/bestprogramtni", getBestProgramTni);
router.get("/bestprogramtni/:id", getBestProgramTniById);
router.post("/bestprogramtni", saveBestProgramTni);
router.patch("/bestprogramtni/:id", updateBestProgramTni);
router.delete("/bestprogramtni/:id", deleteBestProgramTni);

export default router;
