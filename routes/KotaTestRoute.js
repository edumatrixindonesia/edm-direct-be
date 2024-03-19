import express from "express";
import {
  getKotaTest,
  getKotaTestById,
  createKotaTest,
  updateKotaTest,
  deleteKotaTest,
} from "../controllers/KotaTestController.js";

const router = express.Router()

router.get('/kotatest', getKotaTest)
router.get('/kotatest/:id', getKotaTestById)
router.post('/kotatest', createKotaTest)
router.patch('/kotatest/:id', updateKotaTest)
router.delete('/kotatest/:id', deleteKotaTest)

export default router