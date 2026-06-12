import express from "express";
import UserController from "../controllers/user.controller.js";
import AuthMiddleware from "../middlewares/auth.middleware.js";
import asyncHandler from "../utils/asyncHandler.js";
import validateResource from "../middlewares/validate.resource.js";
import userSchema from "../schemas/user.schema.js";
const router = express.Router();

router.get(
  "/",
  AuthMiddleware.authenticate,
  asyncHandler(UserController.getUsers),
);
router.post(
  "/",
  validateResource(userSchema),
  asyncHandler(UserController.createUser),
);

router.get(
  "/heavy-computation",
  AuthMiddleware.authenticate,
  asyncHandler(UserController.getHeavyComputation),
);

export default router;
