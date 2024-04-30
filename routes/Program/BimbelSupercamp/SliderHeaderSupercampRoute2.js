import express from "express";
import {
  getSliderHeaderSupercamp2,
  getSliderHeaderSupercamp2ById,
  updateSliderHeaderSupercamp2,
  saveSliderHeaderSupercamp2,
  deleteSliderHeaderSupercamp2,
} from "../../../controllers/Program/BimbelSupercamp/SliderHeaderSupercampController2.js";

const router = express.Router();

router.get("/sliderheadersupercamp2", getSliderHeaderSupercamp2);
router.get("/sliderheadersupercamp2/:id", getSliderHeaderSupercamp2ById);
router.post("/sliderheadersupercamp2", saveSliderHeaderSupercamp2);
router.patch("/sliderheadersupercamp2/:id", updateSliderHeaderSupercamp2);
router.delete("/sliderheadersupercamp2/:id", deleteSliderHeaderSupercamp2);

export default router;
