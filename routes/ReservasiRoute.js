import express from "express";
import {
  getReservasi,
  getReservasiById,
  updateReservasi,
  createReservasi,
  deleteReservasi,
} from "../controllers/ReservasiController.js";

const router = express.Router();

router.get("/reservasis", getReservasi);
router.get("/reservasis/:id", getReservasiById);
router.post("/reservasis", createReservasi);
router.patch("/reservasis/:id", updateReservasi);
router.delete("/reservasis/:id", deleteReservasi);

export default router;
