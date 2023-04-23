import express from "express";

// Import all the controllers

import { getAdmin, updateAdmin } from "../controllers/adminModel.controller.js";

const router = express.Router();

router.route("/").post(getAdmin);
router.route("/:id").patch(updateAdmin);

export default router;
