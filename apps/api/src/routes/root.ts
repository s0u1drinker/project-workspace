import type { FastifyPluginAsync } from "fastify";
import type { RootResponse } from "../../types/root";

export const rootRoutes: FastifyPluginAsync = async (app) => {
  app.get("/error", async () => {
    throw new Error("Test error");
  });

  app.get<{ Reply: RootResponse }>("/", async () => {
    return {
      message: "It`s alive!",
    };
  });
};
