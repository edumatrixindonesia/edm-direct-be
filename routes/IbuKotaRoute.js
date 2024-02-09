import express from "express";
import {
  getIbuKota,
  getIbuKotaById,
  updateIbuKota,
  saveIbuKota,
  deleteIbuKota,
} from "../controllers/IbuKotaController.js";

const router = express.Router();

router.get("/ibukotakab", getIbuKota);
router.get("/ibukotakab/:id", getIbuKotaById);
router.post("/ibukotakab", saveIbuKota);
router.patch("/ibukotakab/:id", updateIbuKota);
router.delete("/ibukotakab/:id", deleteIbuKota);

export default router;
