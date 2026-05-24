import UserService from "../services/user.service.js";

class UserController {
  static createUser(req, res) {
    const newUser = UserService.createUsers(req.body);
    res.send(newUser).status(201);
  }
  static getAllUsers(req, res) {
    const users = UserService.getAllUsers();
    res.send(users).status(200);
  }

  static getHeavyComputation(req, res) {
    const result = UserService.heavyComputation();
    res.send({ result }).status(200);

  }
}

export default UserController;
