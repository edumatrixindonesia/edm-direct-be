import express from "express";
import {
  getSliderHeaderLpdp,
  getSliderHeaderLpdpById,
  updateSliderHeaderLpdp,
  saveSliderHeaderLpdp,
  deleteSliderHeaderLpdp,
} from "../../../controllers/Program/BimbelLpdp/SliderHeaderLpdpController.js";

const router = express.Router();

router.get("/sliderheaderlpdp", getSliderHeaderLpdp);
router.get("/sliderheaderlpdp/:id", getSliderHeaderLpdpById);
router.post("/sliderheaderlpdp", saveSliderHeaderLpdp);
router.patch("/sliderheaderlpdp/:id", updateSliderHeaderLpdp);
router.delete("/sliderheaderlpdp/:id", deleteSliderHeaderLpdp);

export default router;
