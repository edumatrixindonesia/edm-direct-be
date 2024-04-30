import express from "express";
import {
  getFaqtni,
  getFaqtniById,
  updateFaqtni,
  createFaqtni,
  deleteFaqtni,
} from "../../../controllers/Program/BimbelTniPolri/FaqTniController.js";

const router = express.Router();

router.get("/faqtni", getFaqtni);
router.get("/faqtni/:id", getFaqtniById);
router.post("/faqtni", createFaqtni);
router.patch("/faqtni/:id", updateFaqtni);
router.delete("/faqtni/:id", deleteFaqtni);

export default router;
