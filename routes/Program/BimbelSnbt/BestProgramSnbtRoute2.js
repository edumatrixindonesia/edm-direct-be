import express from "express";
import {
  getBestProgramSnbt2,
  getBestProgramSnbt2ById,
  updateBestProgramSnbt2,
  saveBestProgramSnbt2,
  deleteBestProgramSnbt2,
 } from "../../../controllers/Program/BimbelSnbt/BestProgramSnbtController2.js";

const router = express.Router();

router.get("/bestprogramsnbt2", getBestProgramSnbt2);
router.get("/bestprogramsnbt2/:id", getBestProgramSnbt2ById);
router.post("/bestprogramsnbt2", saveBestProgramSnbt2);
router.patch("/bestprogramsnbt2/:id", updateBestProgramSnbt2);
router.delete("/bestprogramsnbt2/:id", deleteBestProgramSnbt2);

export default router;
