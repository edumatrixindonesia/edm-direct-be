import express from "express";
import {
  getSliderHeaderTni,
  getSliderHeaderTniById,
  updateSliderHeaderTni,
  saveSliderHeaderTni,
  deleteSliderHeaderTni,
} from "../../../controllers/Program/BimbelTniPolri/SliderHeaderTniController.js";

const router = express.Router();

router.get("/sliderheadertni", getSliderHeaderTni);
router.get("/sliderheadertni/:id", getSliderHeaderTniById);
router.post("/sliderheadertni", saveSliderHeaderTni);
router.patch("/sliderheadertni/:id", updateSliderHeaderTni);
router.delete("/sliderheadertni/:id", deleteSliderHeaderTni);

export default router;
