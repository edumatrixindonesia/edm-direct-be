import express from "express";
import {
  getProgram,
  getProgramById,
  updateProgram,
  createProgram,
  deleteProgram,
} from "../controllers/ProgramController.js";

const router = express.Router();

router.get("/program", getProgram);
router.get("/program/:id", getProgramById);
router.post("/program", createProgram);
router.patch("/program/:id", updateProgram);
router.delete("/program/:id", deleteProgram);

export default router;
