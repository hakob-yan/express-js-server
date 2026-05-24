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
  static heavyComputation() {
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
}

export default UserService;
