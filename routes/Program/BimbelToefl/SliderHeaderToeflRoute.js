import express from "express";
import {
  getSliderHeaderToefl,
  getSliderHeaderToeflById,
  updateSliderHeaderToefl,
  saveSliderHeaderToefl,
  deleteSliderHeaderToefl,
} from "../../../controllers/Program/BimbelToefl/SliderHeaderToeflController.js";

const router = express.Router();

router.get("/sliderheadertoefl", getSliderHeaderToefl);
router.get("/sliderheadertoefl/:id", getSliderHeaderToeflById);
router.post("/sliderheadertoefl", saveSliderHeaderToefl);
router.patch("/sliderheadertoefl/:id", updateSliderHeaderToefl);
router.delete("/sliderheadertoefl/:id", deleteSliderHeaderToefl);

export default router;
