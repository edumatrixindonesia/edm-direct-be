import express from "express";
import {
  getGuruTni,
  getGuruTniById,
  updateGuruTni,
  saveGuruTni,
  deleteGuruTni,
} from "../../../controllers/Program/BimbelTniPolri/GuruTniController.js";

const router = express.Router();

router.get("/guruTni", getGuruTni);
router.get("/guruTni/:id", getGuruTniById);
router.post("/guruTni/:id", saveGuruTni);
router.patch("/guruTni/:id", updateGuruTni);
router.delete("/guruTni/:id", deleteGuruTni);

export default router;