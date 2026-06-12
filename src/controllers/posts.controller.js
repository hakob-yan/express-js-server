import PostsService from "../services/posts.service.js";
import UserService from "../services/user.service.js";

class PostsController {
  static async getPosts(req, res) {
    const posts = await PostsService.getPosts();
    res.status(200).send(posts);
  }
  static async createPost(req, res) {
    const { title, content, user_id } = req.body;
    const post = await PostsService.createPost({ title, content, user_id });
    res.status(201).send(post);
  }
}

export default PostsController;