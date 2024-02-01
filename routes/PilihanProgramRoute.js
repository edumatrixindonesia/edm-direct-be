import express from "express";
import {
  getPilihanProgram,
  getPilihanProgramById,
  updatePilihanProgram,
  createPilihanProgram,
  deletePilihanProgram,
} from "../controllers/PilihanProgramController.js";

const router = express.Router();

router.get("/pilihanprogram", getPilihanProgram);
router.get("/pilihanprogram/:id", getPilihanProgramById);
router.post("/pilihanprogram", createPilihanProgram);
router.patch("/pilihanprogram/:id", updatePilihanProgram);
router.delete("/pilihanprogram/:id", deletePilihanProgram);

export default router;
