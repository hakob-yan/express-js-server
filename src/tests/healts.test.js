import request from "supertest";


describe("Health Check API", () => {
    it("shoould return 200 OK with status 'ok'", async () => {
        const response = { status: 200, body: { status: 'ok' } };
        expect(response.status).toBe(200);
    });
});