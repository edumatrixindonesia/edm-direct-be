import express from "express";
import {
  getKelassnbt,
  getKelassnbtById,
  updateKelassnbt,
  saveKelassnbt,
  deleteKelassnbt,
} from "../../../controllers/Program/BimbelSnbt/KelasSnbtController.js";

const router = express.Router();

router.get("/kelassnbt", getKelassnbt);
router.get("/kelassnbt/:id", getKelassnbtById);
router.post("/kelassnbt", saveKelassnbt);
router.patch("/kelassnbt/:id", updateKelassnbt);
router.delete("/kelassnbt/:id", deleteKelassnbt);

export default router;
