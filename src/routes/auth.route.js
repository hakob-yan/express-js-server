import express from "express";
import db from "../config/knex.js";
import asyncHandler from "../utils/asyncHandler.js";
import AuthController from "../controllers/auth.controller.js";
const router = express.Router();

router.get("/login", asyncHandler(AuthController.loginUser));

export default router;