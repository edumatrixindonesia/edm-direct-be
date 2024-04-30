import express from "express";
import {
  getAboutUs,
  getAboutUsById,
  updateAboutUs,
  saveAboutUs,
  deleteAboutUs,
} from "../controllers/AboutUsController.js";

const router = express.Router();

router.get("/aboutus", getAboutUs);
router.get("/aboutus/:id", getAboutUsById);
router.post("/aboutus", saveAboutUs);
router.patch("/aboutus/:id", updateAboutUs);
router.delete("/aboutus/:id", deleteAboutUs);

export default router;
