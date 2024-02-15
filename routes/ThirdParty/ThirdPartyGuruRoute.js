import express from "express";
import {
  getThirdPartyGuru,
  getThirdPartyGuruById,
  updateThirdPartyGuru,
  saveThirdPartyGuru,
  deleteThirdPartyGuru,
} from "../../controllers/ThirdParty/ThirdPartyGuruController.js";

const router = express.Router();

router.get("/thirdpartyguru", getThirdPartyGuru);
router.get("/thirdpartyguru/:id", getThirdPartyGuruById);
router.post("/thirdpartyguru", saveThirdPartyGuru);
router.patch("/thirdpartyguru/:id", updateThirdPartyGuru);
router.delete("/thirdpartyguru/:id", deleteThirdPartyGuru);

export default router;
