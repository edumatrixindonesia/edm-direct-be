import express from "express";
import {
  getPilihanKelasPolri,
  getPilihanKelasPolriById,
  updatePilihanKelasPolri,
  savePilihanKelasPolri,
  deletePilihanKelasPolri,
} from "../../controllers/Kelas/PilihanKelasPolriController.js";

const router = express.Router();

router.get("/pilihankelas-polri", getPilihanKelasPolri);
router.get("/pilihankelas-polri/:id", getPilihanKelasPolriById);
router.post("/pilihankelas-polri", savePilihanKelasPolri);
router.patch("/pilihankelas-polri/:id", updatePilihanKelasPolri);
router.delete("/pilihankelas-polri/:id", deletePilihanKelasPolri);

export default router;
