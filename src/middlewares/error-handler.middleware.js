class ErrorHandlerMiddleware {
  static handleErrors(err, req, res, next) {
    console.error("Error stack:", err.stack);

    res.status(err.status || 500).json({
      message: err.message || "Internal Server Error",
    });
  }
}

export default ErrorHandlerMiddleware;