import express from "express";
import {
  getPilihanKelasCpns,
  getPilihanKelasCpnsById,
  updatePilihanKelasCpns,
  savePilihanKelasCpns,
  deletePilihanKelasCpns,
} from "../../controllers/Kelas/PilihanKelasCpnsController.js";

const router = express.Router();

router.get("/pilihankelas-cpns", getPilihanKelasCpns);
router.get("/pilihankelas-cpns/:id", getPilihanKelasCpnsById);
router.post("/pilihankelas-cpns", savePilihanKelasCpns);
router.patch("/pilihankelas-cpns/:id", updatePilihanKelasCpns);
router.delete("/pilihankelas-cpns/:id", deletePilihanKelasCpns);

export default router;
