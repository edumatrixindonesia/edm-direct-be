// import express from "express";
// import {
//   getGuru,
//   getGuruById,
//   updateGuru,
//   createGuru,
//   deleteGuru,
//  } from "../controllers/GuruController.js";

// const router = express.Router();

// router.get("/guru", getGuru);
// router.get("/guru/:id", getGuruById);
// router.post("/guru", createGuru);
// router.patch("/guru/:id", updateGuru);
// router.delete("/guru/:id", deleteGuru);

// export default router;

import express from "express";
import {
  getGuru,
  getGuruById,
  updateGuru,
  saveGuru,
  deleteGuru,
} from "../controllers/GuruController.js";

const router = express.Router();

router.get("/guru", getGuru);
router.get("/guru/:id", getGuruById);
router.post("/guru/:id", saveGuru);
router.patch("/guru/:id", updateGuru);
router.delete("/guru/:id", deleteGuru);

export default router;