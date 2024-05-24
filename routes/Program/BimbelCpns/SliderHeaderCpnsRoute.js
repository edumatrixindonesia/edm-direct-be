import express from "express";
import {
  getSliderHeaderCpns,
  getSliderHeaderCpnsById,
  updateSliderHeaderCpns,
  saveSliderHeaderCpns,
  deleteSliderHeaderCpns,
} from "../../../controllers/Program/BimbelCpns/SliderHeaderCpnsController.js";

const router = express.Router();

router.get("/sliderheadercpns", getSliderHeaderCpns);
router.get("/sliderheadercpns/:id", getSliderHeaderCpnsById);
router.post("/sliderheadercpns", saveSliderHeaderCpns);
router.patch("/sliderheadercpns/:id", updateSliderHeaderCpns);
router.delete("/sliderheadercpns/:id", deleteSliderHeaderCpns);

export default router;
