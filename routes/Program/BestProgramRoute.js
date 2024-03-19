import express from "express";
import {
  getBestProgram,
  getBestProgramById,
  updateBestProgram,
  saveBestProgram,
  deleteBestProgram,
 } from "../../controllers/Program/BestProgramController.js";

const router = express.Router();

router.get("/bestprogram", getBestProgram);
router.get("/bestprogram/:id", getBestProgramById);
router.post("/bestprogram", saveBestProgram);
router.patch("/bestprogram/:id", updateBestProgram);
router.delete("/bestprogram/:id", deleteBestProgram);

export default router;
