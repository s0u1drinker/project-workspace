import Fastify from "fastify";
import { registerPlugins } from "./plugins";
import { registerRoutes } from "./routes";
import { registerErrorHandler } from "./errors";

export const app = Fastify({
  logger: true,
});

registerPlugins(app);
registerErrorHandler(app);
registerRoutes(app);
