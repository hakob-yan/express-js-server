import app from "./app.js";
import { env } from "./config/env.js";

app.listen(env.PORT, env.HOST, () =>
  console.log(`Server is running on port ${env.PORT || env.HOST}`),
);

