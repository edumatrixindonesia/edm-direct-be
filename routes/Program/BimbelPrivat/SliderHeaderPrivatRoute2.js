import express from "express";
import {
  getSliderHeaderPrivat2,
  getSliderHeaderPrivat2ById,
  updateSliderHeaderPrivat2,
  saveSliderHeaderPrivat2,
  deleteSliderHeaderPrivat2,
} from "../../../controllers/Program/BimbelPrivat/SliderHeaderPrivatController2.js";

const router = express.Router();

router.get("/sliderheaderprivat2", getSliderHeaderPrivat2);
router.get("/sliderheaderprivat2/:id", getSliderHeaderPrivat2ById);
router.post("/sliderheaderprivat2", saveSliderHeaderPrivat2);
router.patch("/sliderheaderprivat2/:id", updateSliderHeaderPrivat2);
router.delete("/sliderheaderprivat2/:id", deleteSliderHeaderPrivat2);

export default router;
