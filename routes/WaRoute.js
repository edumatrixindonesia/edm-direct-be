import express from "express";
import {
  getWhatsapp,
  getWhatsappById,
  updateWhatsapp,
  createWhatsapp,
  deleteWhatsapp,
} from "../controllers/WaController.js";

const router = express.Router();

router.get("/whatsapps", getWhatsapp);
router.get("/whatsapps/:id", getWhatsappById);
router.post("/whatsapps", createWhatsapp);
router.patch("/whatsapps/:id", updateWhatsapp);
router.delete("/whatsapps/:id", deleteWhatsapp);

export default router;
