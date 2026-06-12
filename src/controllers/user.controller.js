import UserService from "../services/user.service.js";

class UserController {
  static async getUsers(req, res) {
    const users = await UserService.getUsers();
    res.status(200).send(users);
  }

  static async createUser(req, res) {
    const result = await UserService.createUser(req.body);
    res.status(201).send({ result });
  }



  static async getHeavyComputation(req, res) {
    const result = await UserService.heavyComputation();
    res.status(200).send({ result });
  }


}

export default UserController;