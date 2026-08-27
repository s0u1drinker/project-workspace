import type { FastifyInstance } from "fastify";

import { rootRoutes } from "./root";

export const registerRoutes = (app: FastifyInstance) => {
  app.register(rootRoutes);
};
