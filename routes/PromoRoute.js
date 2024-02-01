import express from "express";
import {
  getPromo,
  getPromoById,
  updatePromo,
  savePromo,
  deletePromo,
} from "../controllers/PromoController.js";

const router = express.Router();

router.get("/promo", getPromo);
router.get("/promo/:id", getPromoById);
router.post("/promo", savePromo);
router.patch("/promo/:id", updatePromo);
router.delete("/promo/:id", deletePromo);

export default router;
