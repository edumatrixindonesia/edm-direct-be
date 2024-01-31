import express from "express";
import {
  getOffice,
  getOfficeById,
  updateOffice,
  createOffice,
  deleteOffice,
} from "../controllers/OfficeController.js";

const router = express.Router();

router.get("/office", getOffice);
router.get("/office/:id", getOfficeById);
router.post("/office", createOffice);
router.patch("/office/:id", updateOffice);
router.delete("/office/:id", deleteOffice);

export default router;
