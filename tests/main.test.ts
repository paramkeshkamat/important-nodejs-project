import request from "supertest";
import { app } from "../src/app";

describe("Sample tests", () => {
  // beforeAll(() => {
  //   console.log("Running Tests");
  // });

  // afterAll(() => {
  //   console.log("Finished running all tests");
  // });

  describe("GET /", () => {
    test("should return 200 on success", async () => {
      const response = await request(app).get("/").send();
      expect(response.statusCode).toBe(200);
      expect(response.headers["content-type"]).toContain("text/html");
    });
  });

  describe("GET /important-route", () => {
    test("should return 200 on success", async () => {
      const response = await request(app).get("/important-route").send();
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty("data");
      expect(response.headers["content-type"]).toContain("application/json");
    });
  });
});
