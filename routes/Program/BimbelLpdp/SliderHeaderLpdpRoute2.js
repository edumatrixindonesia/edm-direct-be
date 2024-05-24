import express from "express";
import {
  getSliderHeaderLpdp2,
  getSliderHeaderLpdp2ById,
  updateSliderHeaderLpdp2,
  saveSliderHeaderLpdp2,
  deleteSliderHeaderLpdp2,
} from "../../../controllers/Program/BimbelLpdp/SliderHeaderLpdpController2.js";

const router = express.Router();

router.get("/sliderheaderlpdp2", getSliderHeaderLpdp2);
router.get("/sliderheaderlpdp2/:id", getSliderHeaderLpdp2ById);
router.post("/sliderheaderlpdp2", saveSliderHeaderLpdp2);
router.patch("/sliderheaderlpdp2/:id", updateSliderHeaderLpdp2);
router.delete("/sliderheaderlpdp2/:id", deleteSliderHeaderLpdp2);

export default router;
