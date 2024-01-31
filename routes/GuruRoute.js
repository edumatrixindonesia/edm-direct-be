import express from "express";
import {
  getGuru,
  getGuruById,
  updateGuru,
  saveGuru,
  deleteGuru,
} from "../controllers/GuruController.js";

const router = express.Router();

router.get("/gurus", getGuru);
router.get("/gurus/:id", getGuruById);
router.post("/gurus", saveGuru);
router.patch("/gurus/:id", updateGuru);
router.delete("/gurus/:id", deleteGuru);

export default router;
