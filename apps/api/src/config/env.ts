import "dotenv/config";

export const env = {
  port: Number(process.env.PORT ?? 3000),
  host: process.env.HOST ?? "localhost",
  nodeEnv: process.env.NODE_ENV ?? "development",
};
