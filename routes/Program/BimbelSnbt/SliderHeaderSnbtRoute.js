import express from "express";
import {
  getSliderHeaderSnbt,
  getSliderHeaderSnbtById,
  updateSliderHeaderSnbt,
  saveSliderHeaderSnbt,
  deleteSliderHeaderSnbt,
} from "../../../controllers/Program/BimbelSnbt/SliderHeaderController.js";

const router = express.Router();

router.get("/sliderheaderSnbt", getSliderHeaderSnbt);
router.get("/sliderheaderSnbt/:id", getSliderHeaderSnbtById);
router.post("/sliderheaderSnbt", saveSliderHeaderSnbt);
router.patch("/sliderheaderSnbt/:id", updateSliderHeaderSnbt);
router.delete("/sliderheaderSnbt/:id", deleteSliderHeaderSnbt);

export default router;
