import db from "../config/knex.js";

class UserService {
  static async getUsers() {
    return await db("users").select("*");
  }
  static async heavyComputation() {
    const now = Date.now();
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
      const delay = Date.now() - now;
      if (delay > 5000) {
        console.log(`Heavy computation is taking too long: ${delay}ms`);
        break;
      }
      sum += i;
    }

    return sum;
  }

  static async createUser(userData) {
    const users = await db("users").insert(userData).returning("*");
    return users;
  }

  static async updateUser(id, userData) {
    const users = await db("users").where({ id }).update({ ...userData, updated_at: db.fn.now() }).returning("*");
    return users;
  }

  static async deleteUser(id) {
    const users = await db("users").where({ id }).del().returning("*");
    return users;

  }
}

export default UserService;
