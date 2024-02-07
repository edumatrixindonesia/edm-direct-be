import express from "express";
import {
  getPilihanKelas,
  getPilihanKelasById,
  updatePilihanKelas,
  savePilihanKelas,
  deletePilihanKelas,
} from "../../controllers/Kelas/PilihanKelasController.js";

const router = express.Router();

router.get("/pilihankelas", getPilihanKelas);
router.get("/pilihankelas/:id", getPilihanKelasById);
router.post("/pilihankelas", savePilihanKelas);
router.patch("/pilihankelas/:id", updatePilihanKelas);
router.delete("/pilihankelas/:id", deletePilihanKelas);

export default router;
