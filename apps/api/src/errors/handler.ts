import type { FastifyInstance } from "fastify";

export const registerErrorHandler = (app: FastifyInstance) => {
  app.setErrorHandler((error, request, reply) => {
    request.log.error(error);

    reply.status(500).send({
      message: error instanceof Error ? error.message : "Internal Server Error",
    });
  });
};
