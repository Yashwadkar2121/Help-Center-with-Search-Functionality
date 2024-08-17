// errorHandler.js

// Custom Error Handling Middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
};

// 404 Not Found Error Handling
const notFoundHandler = (req, res, next) => {
  res.status(404).json({ error: "Resource not found" });
};

// Validation Error Handling
const validationErrorHandler = (error) => {
  return {
    status: 400,
    message: error.message || "Validation error",
  };
};

module.exports = {
  errorHandler,
  notFoundHandler,
  validationErrorHandler,
};
