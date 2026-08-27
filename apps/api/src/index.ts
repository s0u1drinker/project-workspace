import { app } from "./app";
import { env } from "./config/env";

const start = async () => {
  try {
    await app.listen({
      port: env.port,
      host: env.host,
    });
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();
