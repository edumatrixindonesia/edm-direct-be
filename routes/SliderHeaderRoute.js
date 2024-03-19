import express from "express";
import {
  getSliderHeader,
  getSliderHeaderById,
  updateSliderHeader,
  saveSliderHeader,
  deleteSliderHeader,
} from "../controllers/SliderHeaderController.js";

const router = express.Router();

router.get("/sliderheader", getSliderHeader);
router.get("/sliderheader/:id", getSliderHeaderById);
router.post("/sliderheader", saveSliderHeader);
router.patch("/sliderheader/:id", updateSliderHeader);
router.delete("/sliderheader/:id", deleteSliderHeader);

export default router;
