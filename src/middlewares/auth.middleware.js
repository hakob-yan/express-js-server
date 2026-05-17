class AuthMiddleware {
  static authenticate(req, res, next) {
    console.log("Authenticating user...");
    next();
  }
}

export default AuthMiddleware;
