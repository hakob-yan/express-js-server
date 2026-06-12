import express from "express";
import PostsController from "../controllers/posts.controller.js";
import asyncHandler from "../utils/asyncHandler.js";
import validateResource from "../middlewares/validate.resource.js";
import postSchema from "../schemas/posts.schema.js";
const router = express.Router();

router.get("/", asyncHandler(PostsController.getPosts));
router.post("/", validateResource(postSchema), asyncHandler(PostsController.createPost));


export default router;