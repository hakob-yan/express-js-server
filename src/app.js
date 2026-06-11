import express from "express";
import morgan from "morgan";
import userRoutes from "./routes/user.route.js";
import healthRoute from "./routes/healts.route.js";

import ErrorHandlerMiddleware from "./middlewares/error-handler.middleware.js";

const app = express();
app.use(morgan("combined"));
app.use(express.json());

app.use("/users", userRoutes);
app.use("/health", healthRoute);

app.use(ErrorHandlerMiddleware.handleErrors);

export default app;
