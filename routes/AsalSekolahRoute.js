import express from "express";
import {
  getAsalSekolah,
  getAsalSekolahById,
  updateAsalSekolah,
  saveAsalSekolah,
  deleteAsalSekolah,
} from "../controllers/AsalSekolahController.js";

const router = express.Router();

router.get("/asalsekolah", getAsalSekolah);
router.get("/asalsekolah/:id", getAsalSekolahById);
router.post("/asalsekolah", saveAsalSekolah);
router.patch("/asalsekolah/:id", updateAsalSekolah);
router.delete("/asalsekolah/:id", deleteAsalSekolah);

export default router;
