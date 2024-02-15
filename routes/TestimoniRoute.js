import express from "express";
import {
  getTestimoni,
  getTestimoniById,
  updateTestimoni,
  saveTestimoni,
  deleteTestimoni,
} from "../controllers/TestimoniController.js";

const router = express.Router();

router.get("/testimoni", getTestimoni);
router.get("/testimoni/:id", getTestimoniById);
router.post("/testimoni", saveTestimoni);
router.patch("/testimoni/:id", updateTestimoni);
router.delete("/testimoni/:id", deleteTestimoni);

export default router;
