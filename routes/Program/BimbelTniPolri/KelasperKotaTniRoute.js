import express from "express";
import {
  getKelasperKotatni,
  getKelasperKotatniById,
  updateKelasperKotatni,
  saveKelasperKotatni,
  deleteKelasperKotatni,
} from "../../../controllers/Program/BimbelTniPolri/KelasperKotaTniController.js";

const router = express.Router();

router.get("/kelasperkotatni/:id", getKelasperKotatni);
router.get("/kelasperkotatni/:id", getKelasperKotatniById);
router.post("/kelasperkotatni/:id", saveKelasperKotatni);
router.patch("/kelasperkotatni/:id", updateKelasperKotatni);
router.delete("/kelasperkotatni/:id", deleteKelasperKotatni);

export default router;
