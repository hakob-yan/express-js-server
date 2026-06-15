import { USER_SESSION } from "../constants/index.js";

export default class AuthController {

    static async loginUser(req, res) {
        req.session.userId = USER_SESSION.USER_ID;
        req.session.role = USER_SESSION.ROLE;
        res.send("Logged in").status(200);
    }
}