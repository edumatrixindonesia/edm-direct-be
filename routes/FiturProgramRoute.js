import express from "express";
import {
  getFiturProgram,
  getFiturProgramById,
  updateFiturProgram,
  createFiturProgram,
  deleteFiturProgram,
} from "../controllers/FiturProgramController.js";

const router = express.Router();

router.get("/fiturprogram", getFiturProgram);
router.get("/fiturprogram/:id", getFiturProgramById);
router.post("/fiturprogram", createFiturProgram);
router.patch("/fiturprogram/:id", updateFiturProgram);
router.delete("/fiturprogram/:id", deleteFiturProgram);

export default router;
