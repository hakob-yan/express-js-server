import dotenv from "dotenv";

dotenv.config({ path: "./src/.env" });
export const env = {
  PORT: process.env.PORT,
  HOST: process.env.HOST,  
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME
};
