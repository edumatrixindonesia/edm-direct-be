import express from "express";
import {
  getSliderHeader2,
  getSliderHeader2ById,
  updateSliderHeader2,
  saveSliderHeader2,
  deleteSliderHeader2,
} from "../controllers/SliderHeaderController2.js";

const router = express.Router();

router.get("/sliderheader2", getSliderHeader2);
router.get("/sliderheader2/:id", getSliderHeader2ById);
router.post("/sliderheader2", saveSliderHeader2);
router.patch("/sliderheader2/:id", updateSliderHeader2);
router.delete("/sliderheader2/:id", deleteSliderHeader2);

export default router;
