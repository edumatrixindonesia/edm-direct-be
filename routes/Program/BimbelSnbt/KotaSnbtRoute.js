import express from "express";
import {
  getKotasnbt,
  getKotasnbtById,
  updateKotasnbt,
  saveKotasnbt,
  deleteKotasnbt,
 } from "../../../controllers/Program/BimbelSnbt/KotaSnbtController.js";

const router = express.Router();

router.get("/kotasnbt", getKotasnbt);
router.get("/kotasnbt/:id", getKotasnbtById);
router.post("/kotasnbt", saveKotasnbt);
router.patch("/kotasnbt/:id", updateKotasnbt);
router.delete("/kotasnbt/:id", deleteKotasnbt);

export default router;
