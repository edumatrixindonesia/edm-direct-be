import express from "express";
import {
  getSliderHeaderIgcse,
  getSliderHeaderIgcseById,
  updateSliderHeaderIgcse,
  saveSliderHeaderIgcse,
  deleteSliderHeaderIgcse,
} from "../../../controllers/Program/BimbelIgcse/SliderHeaderIgcseController.js";

const router = express.Router();

router.get("/sliderheaderigcse", getSliderHeaderIgcse);
router.get("/sliderheaderigcse/:id", getSliderHeaderIgcseById);
router.post("/sliderheaderigcse", saveSliderHeaderIgcse);
router.patch("/sliderheaderigcse/:id", updateSliderHeaderIgcse);
router.delete("/sliderheaderigcse/:id", deleteSliderHeaderIgcse);

export default router;
