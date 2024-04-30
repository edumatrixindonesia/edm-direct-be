import express from "express";
import {
  getBestProgramSnbt,
  getBestProgramSnbtById,
  updateBestProgramSnbt,
  saveBestProgramSnbt,
  deleteBestProgramSnbt,
 } from "../../../controllers/Program/BimbelSnbt/BestProgramSnbtController.js";

const router = express.Router();

router.get("/bestprogramSnbt", getBestProgramSnbt);
router.get("/bestprogramSnbt/:id", getBestProgramSnbtById);
router.post("/bestprogramSnbt", saveBestProgramSnbt);
router.patch("/bestprogramSnbt/:id", updateBestProgramSnbt);
router.delete("/bestprogramSnbt/:id", deleteBestProgramSnbt);

export default router;
