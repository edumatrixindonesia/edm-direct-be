import express from "express";
import {
  getKedinasan,
  getKedinasanById,
  updateKedinasan,
  saveKedinasan,
  deleteKedinasan,
} from "../../controllers/Kelas/KedinasanController.js";

const router = express.Router();

router.get("/kedinasan", getKedinasan);
router.get("/kedinasan/:id", getKedinasanById);
router.post("/kedinasan", saveKedinasan);
router.patch("/kedinasan/:id", updateKedinasan);
router.delete("/kedinasan/:id", deleteKedinasan);

export default router;
