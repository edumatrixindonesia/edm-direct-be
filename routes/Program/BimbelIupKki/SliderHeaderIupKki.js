import express from "express";
import {
  getSliderHeaderIupKki,
  getSliderHeaderIupKkiById,
  updateSliderHeaderIupKki,
  saveSliderHeaderIupKki,
  deleteSliderHeaderIupKki,
} from "../../../controllers/Program/BimbelIupKki/SliderHeaderIupKKiController.js";

const router = express.Router();

router.get("/sliderheaderiupkki", getSliderHeaderIupKki);
router.get("/sliderheaderiupkki/:id", getSliderHeaderIupKkiById);
router.post("/sliderheaderiupkki", saveSliderHeaderIupKki);
router.patch("/sliderheaderiupkki/:id", updateSliderHeaderIupKki);
router.delete("/sliderheaderiupkki/:id", deleteSliderHeaderIupKki);

export default router;
