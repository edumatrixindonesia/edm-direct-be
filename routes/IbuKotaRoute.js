import express from "express";
import {
  getIbuKota,
  getIbuKotaById,
  updateIbuKota,
  saveIbuKota,
  deleteIbuKota,
} from "../controllers/IbuKotaController.js";

const router = express.Router();

router.get("/ibukota", getIbuKota);
router.get("/ibukota/:id", getIbuKotaById);
router.post("/ibukota", saveIbuKota);
router.patch("/ibukota/:id", updateIbuKota);
router.delete("/ibukota/:id", deleteIbuKota);

export default router;
