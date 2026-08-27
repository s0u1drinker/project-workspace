import { describe, expect, test } from "vitest";
import { app } from "../src/app.ts";
import type { RootResponse } from "../types/root.ts";

describe("GET /", () => {
  test("returns API greeting", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/",
    });
    const body = response.json() as RootResponse;

    expect(response.statusCode).toBe(200);
    expect(body).toEqual({
      message: "It`s alive!",
    });
  });

  test("handles errors", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/error",
    });

    expect(response.statusCode).toBe(500);

    expect(response.json()).toEqual({
      message: "Test error",
    });
  });
});
