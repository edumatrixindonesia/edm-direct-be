import express from "express";
import {
  getBestProgram2,
  getBestProgram2ById,
  updateBestProgram2,
  saveBestProgram2,
  deleteBestProgram2,
 } from "../../controllers/Program/BestProgramController2.js";

const router = express.Router();

router.get("/bestprogram2", getBestProgram2);
router.get("/bestprogram2/:id", getBestProgram2ById);
router.post("/bestprogram2", saveBestProgram2);
router.patch("/bestprogram2/:id", updateBestProgram2);
router.delete("/bestprogram2/:id", deleteBestProgram2);

export default router;
