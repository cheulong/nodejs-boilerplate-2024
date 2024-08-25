import { test, expect } from "@playwright/test";

test.describe("API tests", () => {
  const baseURL = "http://localhost:4000";
  test("should return 200 status code", async ({ request }) => {
    const response = await request.get(`${baseURL}/api/contacts`);
    expect(response.status()).toBe(200);
  });
});
