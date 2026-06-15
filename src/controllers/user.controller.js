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
  static async updateUser(req, res) {
    const result = await UserService.updateUser(req.params.id, req.body);
    res.status(200).send({ result });
  }

  static async deleteUser(req, res) {
    const result = await UserService.deleteUser(req.params.id);
    return res.status(200).send({ result });
  }

  static async getHeavyComputation(req, res) {
    const result = await UserService.heavyComputation();
    res.status(200).send({ result });
  }


}

export default UserController;