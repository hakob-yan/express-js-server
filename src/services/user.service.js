import pool from "../config/database.js";

class UserService {
  static createUsers(userData) {
    return userData;
  }
  static getAllUsers() {
    return [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ];
  }
}

export default UserService;
