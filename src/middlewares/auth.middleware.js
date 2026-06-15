class AuthMiddleware {
  static authenticate(req, res, next) {
    if (!req.session.userId || !req.session.role) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    next();
  }
}

export default AuthMiddleware;
