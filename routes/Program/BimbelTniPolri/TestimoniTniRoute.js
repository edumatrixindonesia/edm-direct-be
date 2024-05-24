import express from "express";
import {
  getTestimoniTni,
  getTestimoniTniById,
  updateTestimoniTni,
  saveTestimoniTni,
  deleteTestimoniTni,
} from "../../../controllers/Program/BimbelTniPolri/TestimoniTniController.js";

const router = express.Router();

router.get("/testimonitni", getTestimoniTni);
router.get("/testimonitni/:id", getTestimoniTniById);
router.post("/testimonitni", saveTestimoniTni);
router.patch("/testimonitni/:id", updateTestimoniTni);
router.delete("/testimonitni/:id", deleteTestimoniTni);

export default router;
