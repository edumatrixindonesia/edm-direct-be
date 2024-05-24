import express from "express";
import {
  getSliderHeaderBumn,
  getSliderHeaderBumnById,
  updateSliderHeaderBumn,
  saveSliderHeaderBumn,
  deleteSliderHeaderBumn,
} from "../../../controllers/Program/BimbelBumn/SliderHeaderBumnController.js";

const router = express.Router();

router.get("/sliderheaderbumn", getSliderHeaderBumn);
router.get("/sliderheaderbumn/:id", getSliderHeaderBumnById);
router.post("/sliderheaderbumn", saveSliderHeaderBumn);
router.patch("/sliderheaderbumn/:id", updateSliderHeaderBumn);
router.delete("/sliderheaderbumn/:id", deleteSliderHeaderBumn);

export default router;
