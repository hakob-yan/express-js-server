import UserService from "../services/user.service.js";

class UserController {
  static createUser(req, res) {
    const newUser = UserService.createUsers(req.body);
    res.send(newUser).status(201);
  }
  static getAllUsers(req, res) {
    const users = UserService.getAllUsers();
    throw new Error("Something went wrong while fetching users");
    res.send(users).status(200);
  }
}

export default UserController;
