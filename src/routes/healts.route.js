import express from "express";
import db from "../config/knex.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const data = await db.raw("SELECT 1+1 AS result");
  data.rows[0].result === 2 ? res.status(200).json({ message: "OK" }) : res.status(500).json({ message: "NOT OK" });
});

export default router;