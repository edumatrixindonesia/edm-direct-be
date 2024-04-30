import express from "express";
import {
  getSliderHeaderSupercamp,
  getSliderHeaderSupercampById,
  updateSliderHeaderSupercamp,
  saveSliderHeaderSupercamp,
  deleteSliderHeaderSupercamp,
} from "../../../controllers/Program/BimbelSupercamp/SliderHeaderSupercampController.js";

const router = express.Router();

router.get("/sliderheadersupercamp", getSliderHeaderSupercamp);
router.get("/sliderheadersupercamp/:id", getSliderHeaderSupercampById);
router.post("/sliderheadersupercamp", saveSliderHeaderSupercamp);
router.patch("/sliderheadersupercamp/:id", updateSliderHeaderSupercamp);
router.delete("/sliderheadersupercamp/:id", deleteSliderHeaderSupercamp);

export default router;
