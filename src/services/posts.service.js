import db from "../config/knex.js";
import AppError from "../utils/app.error.js";

class PostsService {
  static async getPosts() {
    return await db("posts").select("*");
  }
  static async createPost(postData) {
    const { title, content, user_id } = postData;
    const user = await db("users").where({ id: user_id }).first();
    if (!user) {
      throw new AppError("User not found", 404);
    }
    const posts = await db("posts").insert({ title, content, user_id }).returning("*");
    return posts;
  }
}

export default PostsService;
