import pg from "pg";
import { env } from "./env.js";

const { Pool } = pg;
const pool = new Pool({
  user: env.DB_USERNAME,
  host: env.DB_HOST,
  password: env.DB_PASSWORD,
  port: env.DB_PORT,
  database: env.DB_NAME,
});

pool
  .connect()
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("DB connection error", err));

export default pool;
