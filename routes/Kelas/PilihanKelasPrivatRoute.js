import express from "express";
import {
  getPilihanKelasPrivat,
  getPilihanKelasPrivatById,
  updatePilihanKelasPrivat,
  savePilihanKelasPrivat,
  deletePilihanKelasPrivat,
} from "../../controllers/Kelas/PilihanKelasPrivatController.js";

const router = express.Router();

router.get("/pilihankelas-privat", getPilihanKelasPrivat);
router.get("/pilihankelas-privat/:id", getPilihanKelasPrivatById);
router.post("/pilihankelas-privat", savePilihanKelasPrivat);
router.patch("/pilihankelas-privat/:id", updatePilihanKelasPrivat);
router.delete("/pilihankelas-privat/:id", deletePilihanKelasPrivat);

export default router;
