import express from "express";
import {
  getBestProgramTni2,
  getBestProgramTni2ById,
  updateBestProgramTni2,
  saveBestProgramTni2,
  deleteBestProgramTni2,
 } from "../../../controllers/Program/BimbelTniPolri/BestProgramTniController2.js";

const router = express.Router();

router.get("/bestprogramtni2", getBestProgramTni2);
router.get("/bestprogramtni2/:id", getBestProgramTni2ById);
router.post("/bestprogramtni2", saveBestProgramTni2);
router.patch("/bestprogramtni2/:id", updateBestProgramTni2);
router.delete("/bestprogramtni2/:id", deleteBestProgramTni2);

export default router;
