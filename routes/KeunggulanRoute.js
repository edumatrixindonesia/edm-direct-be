import express from "express";
import {
  getKeunggulan,
  getKeunggulanById,
  updateKeunggulan,
  saveKeunggulan,
  deleteKeunggulan,
} from "../controllers/KeunggulanController.js";

const router = express.Router();

router.get("/keunggulan", getKeunggulan);
router.get("/keunggulan/:id", getKeunggulanById);
router.post("/keunggulan", saveKeunggulan);
router.patch("/keunggulan/:id", updateKeunggulan);
router.delete("/keunggulan/:id", deleteKeunggulan);

export default router;
