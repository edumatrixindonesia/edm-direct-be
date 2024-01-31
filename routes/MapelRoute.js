import express from "express";
import {
  getMapel,
  getMapelById,
  updateMapel,
  createMapel,
  deleteMapel,
} from "../controllers/MapelController.js";

const router = express.Router();

router.get("/matapelajaran", getMapel);
router.get("/matapelajaran/:id", getMapelById);
router.post("/matapelajaran", createMapel);
router.patch("/matapelajaran/:id", updateMapel);
router.delete("/matapelajaran/:id", deleteMapel);

export default router;
