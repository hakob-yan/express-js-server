
function validateResource(schema) {
  return (req, res, next) => {
    try {
      schema.parse({ body: req.body, query: req.query, params: req.params });
      next();
    } catch (error) {
      error.status = 400;
      next(error);
    }
  };
}

export default validateResource;
