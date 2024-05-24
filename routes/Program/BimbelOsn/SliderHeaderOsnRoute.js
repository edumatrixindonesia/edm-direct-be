import express from "express";
import {
  getSliderHeaderOsn,
  getSliderHeaderOsnById,
  updateSliderHeaderOsn,
  saveSliderHeaderOsn,
  deleteSliderHeaderOsn,
} from "../../../controllers/Program/BimbelOsn/SliderHeaderOsnController.js";

const router = express.Router();

router.get("/sliderheaderosn", getSliderHeaderOsn);
router.get("/sliderheaderosn/:id", getSliderHeaderOsnById);
router.post("/sliderheaderosn", saveSliderHeaderOsn);
router.patch("/sliderheaderosn/:id", updateSliderHeaderOsn);
router.delete("/sliderheaderosn/:id", deleteSliderHeaderOsn);

export default router;
