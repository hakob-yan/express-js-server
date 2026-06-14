import request from "supertest";
import app from "../app.js";
import db from "../config/knex.js";

afterAll(async () => {
  await db.destroy();
});

describe("Health Check API", () => {
    it("shoould return 200 OK with status 'ok'", async () => {
        const response = await request(app).get("/health");
        expect(response.status).toBe(200);
    });
});git a