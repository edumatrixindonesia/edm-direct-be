import express from "express";
import {
  getSliderHeaderSnbt2,
  getSliderHeaderSnbt2ById,
  updateSliderHeaderSnbt2,
  saveSliderHeaderSnbt2,
  deleteSliderHeaderSnbt2,
} from "../../../controllers/Program/BimbelSnbt/SliderHeaderController2.js";

const router = express.Router();

router.get("/sliderheaderSnbt2", getSliderHeaderSnbt2);
router.get("/sliderheaderSnbt2/:id", getSliderHeaderSnbt2ById);
router.post("/sliderheaderSnbt2", saveSliderHeaderSnbt2);
router.patch("/sliderheaderSnbt2/:id", updateSliderHeaderSnbt2);
router.delete("/sliderheaderSnbt2/:id", deleteSliderHeaderSnbt2);

export default router;
