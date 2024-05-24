import express from "express";
import {
  getSliderHeaderPrivat,
  getSliderHeaderPrivatById,
  updateSliderHeaderPrivat,
  saveSliderHeaderPrivat,
  deleteSliderHeaderPrivat,
} from "../../../controllers/Program/BimbelPrivat/SliderHeaderPrivatController.js";

const router = express.Router();

router.get("/sliderheaderprivat", getSliderHeaderPrivat);
router.get("/sliderheaderprivat/:id", getSliderHeaderPrivatById);
router.post("/sliderheaderprivat", saveSliderHeaderPrivat);
router.patch("/sliderheaderprivat/:id", updateSliderHeaderPrivat);
router.delete("/sliderheaderprivat/:id", deleteSliderHeaderPrivat);

export default router;
