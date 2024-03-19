import express from "express";
import {
  getIbuKota,
  getIbuKotaById,
  updateIbuKota,
  saveIbuKota,
  deleteIbuKota,
} from "../controllers/IbuKotaKabController.js";

const router = express.Router();

router.get("/ibukotakab/:id", getIbuKota);
router.get("/ibukotakab/:id", getIbuKotaById);
router.post("/ibukotakab/:id", saveIbuKota);
router.patch("/ibukotakab/:id", updateIbuKota);
router.delete("/ibukotakab/:id", deleteIbuKota);

export default router;