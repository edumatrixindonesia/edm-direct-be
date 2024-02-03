import express from "express";
import {
  getTags,
  getTagsById,
  updateTags,
  createTags,
  deleteTags,
} from "../../controllers/Tags/TagsKedinasanController.js";

const router = express.Router();

router.get("/tags", getTags);
router.get("/tags/:id", getTagsById);
router.post("/tags", createTags);
router.patch("/tags/:id", updateTags);
router.delete("/tags/:id", deleteTags);

export default router;
