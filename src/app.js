import express from "express";
import morgan from "morgan";
import userRoutes from "./routes/user.route.js";
import healthRoute from "./routes/healts.route.js";
import postsRoute from "./routes/posts.route.js";
import authRoute from "./routes/auth.route.js";

import db from "./config/knex.js";
import ErrorHandlerMiddleware from "./middlewares/error-handler.middleware.js";
import session from "express-session";
import { redisStore } from "./config/redis.js";
import { env } from "./config/env.js";
const app = express();

app.use(session({
    store: redisStore,
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}))

app.use(morgan("combined"));
app.use(express.json());

app.use("/users", userRoutes);
app.use("/health", healthRoute);
app.use("/posts", postsRoute);
app.use("/auth", authRoute);



app.use(ErrorHandlerMiddleware.handleErrors);

export default app;
