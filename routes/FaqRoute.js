import express from "express";
import {
  getFaq,
  getFaqById,
  updateFaq,
  createFaq,
  deleteFaq,
} from "../controllers/FaqController.js";

const router = express.Router();

router.get("/faq", getFaq);
router.get("/faq/:id", getFaqById);
router.post("/faq", createFaq);
router.patch("/faq/:id", updateFaq);
router.delete("/faq/:id", deleteFaq);

export default router;
