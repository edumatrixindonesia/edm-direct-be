import express from "express";
import {
  getPilihanKelasOsn,
  getPilihanKelasOsnById,
  updatePilihanKelasOsn,
  savePilihanKelasOsn,
  deletePilihanKelasOsn,
} from "../../controllers/Kelas/PilihanKelasOsnController.js";

const router = express.Router();

router.get("/pilihankelas-osn", getPilihanKelasOsn);
router.get("/pilihankelas-osn/:id", getPilihanKelasOsnById);
router.post("/pilihankelas-osn", savePilihanKelasOsn);
router.patch("/pilihankelas-osn/:id", updatePilihanKelasOsn);
router.delete("/pilihankelas-osn/:id", deletePilihanKelasOsn);

export default router;
